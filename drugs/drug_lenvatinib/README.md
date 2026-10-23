<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;}]"></div>

# lenvatinib

- **generic name:** lenvatinib
- **ATC codes:** `L01EX08`, `L01XE`, `L01XE29`
- **DrugBank:** [DB09078](https://go.drugbank.com/drugs/DB09078) · **PubChem:** [CID 9823820](https://pubchem.ncbi.nlm.nih.gov/compound/9823820)
- **molar mass:** 426.86 g/mol (C21H19ClN4O4) — DrugBank
- **groups:** approved, investigational

## About

Lenvatinib is a protein kinase inhibitor used to treat certain cancers, including thyroid cancer and kidney (renal cell) cancer. It is authorised in the European Union and is used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6523413](https://www.wikidata.org/wiki/Q6523413) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lenvatinib | parent | 426.86 | C21H19ClN4O4 | DrugBank | [9823820](https://pubchem.ncbi.nlm.nih.gov/compound/9823820) | Gupta_2016, Hu_2022, Majid_2024, Tamai_2017 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 5.3 | L/h | 5.3 L/h | Chinese patients with advanced hepatocellular carcinoma | 127 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hu_2022_reference](drugs/drug_lenvatinib/Lenvatinib_Hu2022_reference.md) |
| CL | CL/F | 6.56 | L/h | 6.56 l h(-1) | healthy subjects and patients with cancer | 779 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2016_reference](drugs/drug_lenvatinib/Lenvatinib_Gupta2016_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Hu_2022 · CL</text><circle cx="443.5" cy="30.0" r="4" fill="#ef6c00"><title>Hu_2022 · CL: 5.3 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Gupta_2016 · CL/F</text><circle cx="475.9" cy="46.0" r="4" fill="#ef6c00"><title>Gupta_2016 · CL/F: 6.56 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Gupta_2016_reference](drugs/drug_lenvatinib/Lenvatinib_Gupta2016_reference.md) | — | 1-compartment (no model) | 2 | Gupta A et al., Population pharmacokinetic analysis of…, British journal of clinical… (2016) | [10.1111/bcp.12907](https://doi.org/10.1111/bcp.12907) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Hu_2022_reference](drugs/drug_lenvatinib/Lenvatinib_Hu2022_reference.md) | — | 1-compartment (no model) | 1 | Hu Y et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2103](https://doi.org/10.1002/jcph.2103) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Majid_2024_reference](drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference.md) | — | 2-compartment (no model) | 9 (+2 cov.) | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Tamai_2017_base](drugs/drug_lenvatinib/Lenvatinib_Tamai2017_base.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Tamai T et al., Dose Finding of Lenvatinib in Subjects…, Journal of clinical pharmac… (2017) | [10.1002/jcph.917](https://doi.org/10.1002/jcph.917) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ final](drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final.md) | — | 1-compartment (no model) | 3 (+3 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hayato_2018_AE](drugs/drug_lenvatinib/pd_Hayato_2018_AE.md) | dose-altering AEs ← lenvatinib · categorical (graded) response model | — | Hayato S et al., Exposure-response analysis and simulati…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3687-4](https://doi.org/10.1007/s00280-018-3687-4) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hayato_2018_y](drugs/drug_lenvatinib/pd_Hayato_2018_y.md) | sum of diameters of all target lesions ← lenvatinib · direct Emax (saturable) effect | — | Hayato S et al., Exposure-response analysis and simulati…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3687-4](https://doi.org/10.1007/s00280-018-3687-4) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_Ang_2](drugs/drug_lenvatinib/pd_Majid_2024_Ang_2.md) | Ang‐2 ← lenvatinib · indirect response — drug inhibits the production of Ang‐2 | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_FGF_23](drugs/drug_lenvatinib/pd_Majid_2024_FGF_23.md) | FGF‐23 ← lenvatinib · indirect response — drug inhibits the loss of FGF‐23 | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_SLD](drugs/drug_lenvatinib/pd_Majid_2024_SLD.md) | sum of the longest diameter for target lesions ← lenvatinib · direct Emax (saturable) effect | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_Tie_2](drugs/drug_lenvatinib/pd_Majid_2024_Tie_2.md) | Tie‐2 ← lenvatinib · indirect response — drug inhibits the production of Tie‐2 | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_VEGF](drugs/drug_lenvatinib/pd_Majid_2024_VEGF.md) | VEGF ← lenvatinib · indirect response — drug inhibits the loss of VEGF | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tamai_2017_TEAEs](drugs/drug_lenvatinib/pd_Tamai_2017_TEAEs.md) | occurrence of TEAEs leading to study drug withdrawal or dose reduction during cycle 1 ← lenvatinib · categorical (graded) response model | — | Tamai T et al., Dose Finding of Lenvatinib in Subjects…, Journal of clinical pharmac… (2017) | [10.1002/jcph.917](https://doi.org/10.1002/jcph.917) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:46 | 9:06 | 0/3/2 | 0/0/3 | 0/0/0 | 236,336/48,456 | openai / gpt-6-luna | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2016.pdf` | Gupta A et al., Population pharmacokinetic analysis of…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12907](https://doi.org/10.1111/bcp.12907) | [26879594](https://pubmed.ncbi.nlm.nih.gov/26879594) | Human population-PK model reports numeric lenvatinib CL/F and other quantitative PK findings. |
| `Hu_2022.pdf` | Hu Y et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2103](https://doi.org/10.1002/jcph.2103) | [35689595](https://pubmed.ncbi.nlm.nih.gov/35689595) | The human population-PK model reports numeric lenvatinib clearance and covariate effects in the provided evidence. |

<sub>queue written 2026-10-07T02:37:51.279294+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergerot_2023 | irrelevant | 0 | 0 | This is a human quality-of-life analysis and reports no lenvatinib pharmacokinetic disposition parameters. |
| popPK | Hatanaka_2023 | irrelevant | 0 | 0 | The mixed-effects models assess liver-function changes, not lenvatinib disposition parameters. |
| popPK | Hayato_2018 | irrelevant | 2 | 0 | This is an exposure–response analysis using a population-PK model reported elsewhere, and no lenvatinib disposition parameter values are provided here; model estimates are referred to in tables not included. |
| popPK | Kumondai_2024 | relevant | 7 | 1 | Human lenvatinib concentrations were analyzed using a three-compartment model, but its numeric disposition parameters are not provided here. |
| popPK | Royer_2025 | irrelevant | 0 | 0 | Lenvatinib is only an in-vitro comparator; the reported pharmacokinetics are for XON9, not lenvatinib. |
| popPK | Sueshige_2021 | irrelevant | 1 | 0 | This is a bioanalytical assay study and reports no lenvatinib disposition parameters. |
| popPK | Vogel_2021 | irrelevant | 0 | 0 | This clinical outcomes study reports no lenvatinib pharmacokinetic parameters or model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 02:38 UTC</sub>
