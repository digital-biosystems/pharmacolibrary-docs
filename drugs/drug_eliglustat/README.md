<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;eliglustat&quot;}]"></div>

# eliglustat

- **generic name:** eliglustat
- **ATC codes:** `A16AX10`
- **DrugBank:** [DB09039](https://go.drugbank.com/drugs/DB09039) · **PubChem:** [CID 23652731](https://pubchem.ncbi.nlm.nih.gov/compound/23652731)
- **molar mass:** 404.551 g/mol (C23H36N2O4) — DrugBank
- **groups:** approved, investigational

## About

Eliglustat is a medicine used to treat Gaucher's disease. It is authorised in the European Union and is an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011224](https://www.wikidata.org/wiki/Q21011224) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eliglustat | parent | 404.551 | C23H36N2O4 | DrugBank | [23652731](https://pubchem.ncbi.nlm.nih.gov/compound/23652731) | Li_2020 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.362 | L/h | 22.7 mL/min | adults with Gaucher disease type 1 and hepatic impairment | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2020_84_mg_bid_a](drugs/drug_eliglustat/Eliglustat_Li2020_84_mg_bid_a.md) |
| CL | CL | 1.362 | L/h | 22.7 mL/min | adults with Gaucher disease type 1 and hepatic impairment | unknown | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2020_84_mg_qd_a](drugs/drug_eliglustat/Eliglustat_Li2020_84_mg_qd_a.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Li_2020 · CL</text><circle cx="237.0" cy="30.0" r="4" fill="#ef6c00"><title>Li_2020 · CL: 1.362 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Li_2020 · CL</text><circle cx="237.0" cy="46.0" r="4" fill="#ef6c00"><title>Li_2020 · CL: 1.362 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Li_2020_84_mg_bid_a](drugs/drug_eliglustat/Eliglustat_Li2020_84_mg_bid_a.md) | — | 1-compartment (no model) | 1 | JingLi jing.li3@sanofi.com et al., Impact of hepatic and renal impairment… (2020) | [10.1016/j.ymgme.2019.11.002](https://doi.org/10.1016/j.ymgme.2019.11.002) |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ 84_mg_qd_a](drugs/drug_eliglustat/Eliglustat_Li2020_84_mg_qd_a.md) | — | 1-compartment (no model) | 1 |  |  |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">human + animal</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wolthuis_2025_reference](drugs/drug_eliglustat/Eliglustat_Wolthuis2025_reference.md) | — | 1-compartment (no model) | 0 | Wolthuis DFGJ et al., Model-informed repurposing of eliglusta…, Pediatric nephrology (Berli… (2025) | [10.1007/s00467-025-06688-3](https://doi.org/10.1007/s00467-025-06688-3) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:31 | 0:09 | 0/1/2 | 0/0/0 | 0/0/0 | 7,094/92 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 12/1 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 13  ·  **relevant:** 0
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fowler_2017 | irrelevant |  |  | The paper is a review that discusses a PBPK model for eliglustat as a case study but does not report extractable quantitative pharmacokinetic parameters. |
| popPK | Marshall_2010 | irrelevant |  |  | The paper reports only pharmacodynamic efficacy and disease biomarkers in a mouse model, with no quantitative pharmacokinetic parameters or modeling for eliglustat. |
| popPK | Reddy_2025 | irrelevant |  |  | Eliglustat is used only as a probe substrate in PBPK simulations to evaluate rifampin DDI predictions, with no original quantitative PK parameters reported. |
| popPK | Vykoukal_2025 | irrelevant |  |  | The paper investigates the mechanistic anti-tumor effects of eliglustat in cell lines and mouse models but contains no quantitative pharmacokinetic data or population-PK modeling. |
| popPK | Wang_2019_2 | relevant |  |  | The paper reports quantitative noncompartmental pharmacokinetic parameters (clearance, AUC, Cmax) for eliglustat in rats but does not contain population or compartmental model estimates. |
| popPK | Wolthuis_2025 | relevant | 8 | 2 | The paper uses a population PK model for eliglustat to simulate pediatric dosing, but the specific numeric parameter values (CL, V, Q, ka) are not listed in the text or tables, only simulation outcomes (Cavg, Cmax) and a reference to adult IV clearance. |
| popPK | Zhan_2025 | irrelevant |  |  | Eliglustat is used solely as an internal standard for givinostat quantification, with no pharmacokinetic parameters reported for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 10:31 UTC</sub>
