<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;afatinib&quot;}]"></div>

# afatinib

- **generic name:** afatinib
- **ATC codes:** `L01EB03`, `L01XE13`
- **DrugBank:** [DB08916](https://go.drugbank.com/drugs/DB08916) · **PubChem:** [CID 10184653](https://pubchem.ncbi.nlm.nih.gov/compound/10184653)
- **molar mass:** 485.938 g/mol (C24H25ClFN5O3) — DrugBank
- **groups:** approved, investigational

## About

Afatinib is a protein kinase inhibitor used to treat non-small-cell lung cancer. It is authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4688818](https://www.wikidata.org/wiki/Q4688818) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| afatinib | parent | 485.938 | C24H25ClFN5O3 | DrugBank | [10184653](https://pubchem.ncbi.nlm.nih.gov/compound/10184653) | Freiwald_2014, Nakao_2019 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 20 | L/h | 20.0 L/h | Japanese patients with EGFR mutation-positive advanced non-small cell lung cancer | 34 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nakao_2019_reference](drugs/drug_afatinib/Afatinib_Nakao2019_reference.md) |
| CL | CL/F | 44.04 | L/h | 734 mL/min | patients with advanced solid tumors | 927 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Freiwald_2014_reference](drugs/drug_afatinib/Afatinib_Freiwald2014_reference.md) |
| V | V | 795.8 | L | 795.8 L | Japanese patients with EGFR mutation-positive advanced non-small cell lung cancer | 34 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nakao_2019_reference](drugs/drug_afatinib/Afatinib_Nakao2019_reference.md) |
| ka | kabs | 0.6 | 1/h | 0.60 1/h | Japanese patients with EGFR mutation-positive advanced non-small cell lung cancer | 34 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nakao_2019_reference](drugs/drug_afatinib/Afatinib_Nakao2019_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Nakao_2019 · CL</text><circle cx="295.4" cy="30.0" r="4" fill="#ef6c00"><title>Nakao_2019 · CL: 20 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Freiwald_2014 · CL/F</text><circle cx="415.3" cy="46.0" r="4" fill="#ef6c00"><title>Freiwald_2014 · CL/F: 44.04 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Freiwald_2014_reference](drugs/drug_afatinib/Afatinib_Freiwald2014_reference.md) | — | 1-compartment (no model) | 1 | Freiwald M et al., Population pharmacokinetics of afatinib…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2403-2](https://doi.org/10.1007/s00280-014-2403-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub> | [Nakao_2019_reference](drugs/drug_afatinib/Afatinib_Nakao2019_reference.md) | held back | 1-compartment, oral | 3 | Nakao K et al., Population pharmacokinetics of afatinib…, Scientific reports (2019) | [10.1038/s41598-019-54804-9](https://doi.org/10.1038/s41598-019-54804-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yokota_2023_dose_reduction_or_withdrawal](drugs/drug_afatinib/pd_Yokota_2023_dose_reduction_or_withdrawal.md) | dose reduction or withdrawal ← afatinib · categorical (graded) response model | — | Yokota H et al., Effects of polymorphisms in pregnane X…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04569-w](https://doi.org/10.1007/s00280-023-04569-w) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Zhang_2017_pEGFR](drugs/drug_afatinib/pd_Zhang_2017_pEGFR.md) | expression of pEGFR (Tyr1068) ← afatinib · direct Emax (saturable) effect | model (no simulator) | Zhang SR et al., Efficacy of afatinib, an irreversible E…, Acta pharmacologica Sinica (2017) | [10.1038/aps.2016.107](https://doi.org/10.1038/aps.2016.107) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:13 | 7:50 | 0/0/2 | 0/0/2 | 0/0/0 | 184,112/37,343 | openai / gpt-6-luna | 7 | 2/5 | 6/1 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DCunha_2019.pdf` | D'Cunha RR et al., Nilotinib Alters the Efflux Transporter…, Journal of pharmaceutical s… (2019) | popPK | 10 | [10.1016/j.xphs.2019.05.028](https://doi.org/10.1016/j.xphs.2019.05.028) | [31163185](https://pubmed.ncbi.nlm.nih.gov/31163185) | Afatinib clearance and exposure values are reported numerically for mice. |
| `Freiwald_2014.pdf` | Freiwald M et al., Population pharmacokinetics of afatinib…, Cancer chemotherapy and pha… (2014) | popPK | 10 | [10.1007/s00280-014-2403-2](https://doi.org/10.1007/s00280-014-2403-2) | [24522402](https://pubmed.ncbi.nlm.nih.gov/24522402) | Human population-PK model reports numeric afatinib clearance and distribution volume in the evidence. |
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 9 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | Afatinib PopPK models were constructed in patients, but no numeric PK parameter values are provided in the evidence. |

<sub>queue written 2026-10-06T21:07:10.199680+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Haaland_2014 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis, not a PK study, and it reports no afatinib disposition parameters. |
| popPK | Hotta_2021 | irrelevant | 0 | 0 | Edoxaban is the subject of the PK analysis; afatinib is only co-administered and has no reported PK values. |
| popPK | Niebecker_2019 | irrelevant | 1 | 0 | This is an exposure–adverse-event model, not a disposition-PK analysis, and afatinib PK parameters are not reported in the provided evidence. |
| popPK | Solca_2012 | irrelevant | 0 | 0 | This is an in-vitro binding and cellular activity study with no afatinib disposition parameters. |
| popPK | Yokota_2023 | irrelevant | 0 | 0 | no_text gate: only 199 chars of text extracted (&lt; 400) |
| popPK | Yong_2025 | relevant | 9 | 0 | Afatinib PopPK models were constructed in patients, but no numeric PK parameter values are provided in the evidence. |
| popPK | Zhang_2017 | irrelevant | 3 | 6 | Numeric AUC and half-life are reported, but no clearance, volume, or compartmental/population-PK model parameters are provided. |
| popPK | van_2020 | relevant | 8 | 1 | Human PET compartmental modelling of afatinib is reported, but numeric Ki estimates appear only in figures not provided. |
| popPK | van_2022 | irrelevant | 3 | 5 | This is a human PET-tracer comparison, not a study of afatinib disposition as a therapeutic drug; a literature-derived afatinib volume of distribution (2370 L) is stated, while other PKPD values are in supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:07 UTC</sub>
