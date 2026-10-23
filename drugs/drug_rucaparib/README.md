<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;rucaparib&quot;}]"></div>

# rucaparib

- **generic name:** rucaparib
- **ATC codes:** `L01XK03`
- **DrugBank:** [DB12332](https://go.drugbank.com/drugs/DB12332) · **PubChem:** [CID 9931954](https://pubchem.ncbi.nlm.nih.gov/compound/9931954)
- **molar mass:** 323.371 g/mol (C19H18FN3O) — DrugBank
- **groups:** approved, investigational

## About

Rucaparib is a PARP inhibitor anticancer drug used to treat ovarian, fallopian tube, and peritoneal cancers. It is authorised in the European Union and also has approved and investigational uses elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7376558](https://www.wikidata.org/wiki/Q7376558) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rucaparib | parent | 323.371 | C19H18FN3O | DrugBank | [9931954](https://pubchem.ncbi.nlm.nih.gov/compound/9931954) | Liao_2022 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 11.4 | L/h | 11.4 L/h | patients with cancer | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Liao_2022_reference](drugs/drug_rucaparib/Rucaparib_Liao2022_reference.md) |
| t½ | t1/2z | 7.8 | h | 7.8 h | patients with cancer | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Liao_2022_reference](drugs/drug_rucaparib/Rucaparib_Liao2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Liao_2022_reference](drugs/drug_rucaparib/Rucaparib_Liao2022_reference.md) | — | 1-compartment (no model) | 7 | Liao M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01157-8](https://doi.org/10.1007/s40262-022-01157-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schwarcz_2024_MTT](drugs/drug_rucaparib/pd_Schwarcz_2024_MTT.md) | cell proliferation ← rucaparib · direct sigmoid Emax (Hill) effect | — | Schwarcz S et al., Cytostatic Bacterial Metabolites Interf…, Molecules (Basel, Switzerla… (2024) | [10.3390/molecules29133073](https://doi.org/10.3390/molecules29133073) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wang_2015_PARP_activity](drugs/drug_rucaparib/pd_Wang_2015_PARP_activity.md) | PARP activity in peripheral blood lymphocytes ← rucaparib · direct Emax (saturable) effect | — | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wang_2015_PARP_activity_2](drugs/drug_rucaparib/pd_Wang_2015_PARP_activity_2.md) | PARP activity in tumor tissues ← rucaparib · direct Emax (saturable) effect | — | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:40 | 1:12 | 0/0/1 | 2/0/0 | 0/0/0 | 132,852/4,043 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_2022.pdf` | Green ML et al., Population pharmacokinetics of rucapari…, Cancer chemotherapy and pha… (2022) | popPK | 10 | [10.1007/s00280-022-04413-7](https://doi.org/10.1007/s00280-022-04413-7) | [35397664](https://pubmed.ncbi.nlm.nih.gov/35397664) | The paper is a population pharmacokinetic study of rucaparib in humans, but the provided evidence contains no numeric parameter values (CL, V, etc.). |
| `Wang_2015.pdf` | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | popPK | 10 | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) | [27128213](https://pubmed.ncbi.nlm.nih.gov/27128213) | The study reports a population PK model for rucaparib, but specific numeric disposition parameters (CL, V, Q) are not provided in the evidence text, only PK/PD parameters like IC50 and Imax. |

<sub>queue written 2026-10-06T21:39:20.972482+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2020 | irrelevant | 0 | 0 | The study describes the synthesis and in vitro cytotoxic activity of a drug-dye conjugate, reporting no pharmacokinetic parameters for rucaparib. |
| popPK | Dimitrijevs_2026 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study synthesizing mitochondria-targeted derivatives of rucaparib, with no pharmacokinetic data. |
| popPK | Green_2022 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of rucaparib in humans, but the provided evidence contains no numeric parameter values (CL, V, etc.). |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of radiation sensitivity (clonogenic survival and EC50) in GBM cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume for rucaparib. |
| popPK | Konecny_2021 | irrelevant | 2 | 0 | This is a pharmacometrics/exposure-response analysis that utilizes a previously developed PK model but does not report the quantitative PK parameters (CL, V, ka, etc.) in the provided evidence. |
| popPK | Plummer_2013 | irrelevant | 3 | 0 | The abstract mentions that population pharmacokinetics were explored, but no quantitative PK parameter values (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Schwarcz_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug-metabolite interactions on cell proliferation, not a pharmacokinetic study, and reports no PK parameters for rucaparib. |
| popPK | Wang_2015 | relevant | 10 | 2 | The study reports a population PK model for rucaparib, but specific numeric disposition parameters (CL, V, Q) are not provided in the evidence text, only PK/PD parameters like IC50 and Imax. |
| popPK | Young_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radiotracer 18F-FTT, not rucaparib itself, which is only mentioned as a structural analog. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:39 UTC</sub>
