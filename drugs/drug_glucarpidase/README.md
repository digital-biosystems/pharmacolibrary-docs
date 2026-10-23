<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;glucarpidase&quot;}]"></div>

# glucarpidase

- **generic name:** glucarpidase
- **ATC codes:** `V03AF09`
- **DrugBank:** [DB08898](https://go.drugbank.com/drugs/DB08898) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Glucarpidase is a detoxifying agent used to treat toxicity caused by antineoplastic (cancer) treatment, specifically high levels of methotrexate in the blood. It is an approved medicine, with one product authorised in the European Union, though it remains a specialised rescue therapy used mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5572303](https://www.wikidata.org/wiki/Q5572303) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glucarpidase | parent | 261.52 | Zn4+8 | PubChem | [21195079](https://pubchem.ncbi.nlm.nih.gov/compound/21195079) | Fukaya_2023 |
| methotrexate | metabolite | 454.447 | C20H22N8O5 | PubChem | [4112](https://pubchem.ncbi.nlm.nih.gov/compound/4112) | Fukaya_2023 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 10.74 | L/h | 10.736 L/h | healthy volunteers and patients with delayed MTX excretion after high-dose methotrexate | 15 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fukaya_2023_phase_1](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_1.md) |
| CL | CL | 32.83 | L/h | 32.826 L/h | healthy volunteers and patients with delayed MTX excretion after high-dose methotrexate | 15 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fukaya_2023_phase_2](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_2.md) |
| V | V | 10.75 | L | 10.747 L | healthy volunteers and patients with delayed MTX excretion after high-dose methotrexate | 15 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fukaya_2023_phase_1](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_1.md) |
| V | V | 32.13 | L | 32.133 L | healthy volunteers and patients with delayed MTX excretion after high-dose methotrexate | 15 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fukaya_2023_phase_2](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_2.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fukaya_2023 · CL</text><circle cx="200.8" cy="30.0" r="4" fill="#ef6c00"><title>Fukaya_2023 · CL: 10.74 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Fukaya_2023 · CL</text><circle cx="370.7" cy="46.0" r="4" fill="#ef6c00"><title>Fukaya_2023 · CL: 32.83 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fukaya_2023 · V</text><circle cx="201.0" cy="30.0" r="4" fill="#ef6c00"><title>Fukaya_2023 · V: 10.75 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Fukaya_2023 · V</text><circle cx="367.4" cy="46.0" r="4" fill="#ef6c00"><title>Fukaya_2023 · V: 32.13 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: nonlinear topology</sub> | [Fukaya_2023_phase_1](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_1.md) | — | nonlinear / manual (no model) | 2 | Fukaya Y et al., Development of a population pharmacokin…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: nonlinear topology</sub> | [↳ phase_2](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_2.md) | — | nonlinear / manual (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ original_estimate](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_original_estimate.md) | — | nonlinear / manual (no model) | 4 (+3 cov.) |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:41 | 3:34 | 2/1/0 | 0/0/0 | 0/0/0 | 122,662/7,379 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antoniw_1990 | irrelevant | 2 | 2 | CPG2 (glucarpidase) is only used as a prodrug-activating antibody-enzyme conjugate; the PK parameters reported (half-lives, AUC, Vd, Cl) are for the prodrug and active drug, not for glucarpidase itself. |
| popPK | Mouawad_2026 | irrelevant | 1 | 0 | A narrative review of methotrexate toxicity management mentioning glucarpidase only as a mitigation agent, with no PK parameters for glucarpidase. |
| popPK | Taylor_2020 | irrelevant | 0 | 0 | This is a population PK study of methotrexate, not glucarpidase; glucarpidase is only mentioned as a rescue agent and patients receiving it were excluded, with no glucarpidase disposition parameters reported. |
| popPK | Taylor_2023 | irrelevant | 0 | 0 | This is a population PK study of high-dose methotrexate (MTXPK.org model); glucarpidase is only mentioned as a supportive-care tool and its post-glucarpidase samples were excluded, with no glucarpidase disposition parameters reported. |
| popPK | Weller_1994 | irrelevant | 0 | 0 | In vitro neurotoxicity study of folates in rat neuronal cultures with no glucarpidase PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 19:38 UTC</sub>
