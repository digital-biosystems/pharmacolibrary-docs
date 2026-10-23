<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ribociclib&quot;}]"></div>

# ribociclib

- **generic name:** ribociclib
- **ATC codes:** `L01EF02`
- **DrugBank:** [DB11730](https://go.drugbank.com/drugs/DB11730) · **PubChem:** [CID 44631912](https://pubchem.ncbi.nlm.nih.gov/compound/44631912)
- **molar mass:** 434.548 g/mol (C23H30N8O) — DrugBank
- **groups:** approved, investigational

## About

Ribociclib is a protein kinase inhibitor used to treat breast cancer. It is an approved medicine, authorised in the European Union for breast cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088552](https://www.wikidata.org/wiki/Q27088552) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ribociclib | parent | 434.548 | C23H30N8O | DrugBank | [44631912](https://pubchem.ncbi.nlm.nih.gov/compound/44631912) | Damoiseaux_2022, Ji_2026, Patel_2019, Samant_2018 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 38.4 | L/h | 38.4 L/h | patients with early breast cancer | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ji_2026_reference](drugs/drug_ribociclib/Ribociclib_Ji2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ji_2026_reference](drugs/drug_ribociclib/Ribociclib_Ji2026_reference.md) | — | 1-compartment (no model) | 1 | Ji Y et al., Quantitative Pharmacology Justifying Ri…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01643-3](https://doi.org/10.1007/s40262-026-01643-3) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Damoiseaux_2022_reference](drugs/drug_ribociclib/Ribociclib_Damoiseaux2022_reference.md) | — | 1-compartment (no model) | 1 | Damoiseaux D et al., Predictiveness of the Human-CYP3A4-Tran…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15070860](https://doi.org/10.3390/ph15070860) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Patel_2019_reference](drugs/drug_ribociclib/Ribociclib_Patel2019_reference.md) | — | 1-compartment (no model) | 1 | Patel YT et al., CNS penetration of the CDK4/6 inhibitor…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03864-9](https://doi.org/10.1007/s00280-019-03864-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Samant_2018_fasted_state](drugs/drug_ribociclib/Ribociclib_Samant2018_fasted_state.md) | — | 1-compartment (no model) | 4 | Samant TS et al., Ribociclib Bioavailability Is Not Affec…, Clinical pharmacology and t… (2018) | [10.1002/cpt.940](https://doi.org/10.1002/cpt.940) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ fed_state](drugs/drug_ribociclib/Ribociclib_Samant2018_fed_state.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ geometric_mean_geometric_coefficient_of_variation](drugs/drug_ribociclib/Ribociclib_Samant2018_geometric_mean_geometric_coefficient_o.md) | — | 1-compartment (no model) | 4 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ji_2023_OS](drugs/drug_ribociclib/pd_Ji_2023_OS.md) | overall survival ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ji_2023_PFS](drugs/drug_ribociclib/pd_Ji_2023_PFS.md) | progression-free survival ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ji_2023_QT_interval_prolongation](drugs/drug_ribociclib/pd_Ji_2023_QT_interval_prolongation.md) | QT interval prolongation ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ji_2023_neutropenia](drugs/drug_ribociclib/pd_Ji_2023_neutropenia.md) | neutropenia ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ji_2023_time_to_response](drugs/drug_ribociclib/pd_Ji_2023_time_to_response.md) | time to response ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lu_2021_ANC](drugs/drug_ribociclib/pd_Lu_2021_ANC.md) | absolute neutrophil count ← ribociclib · model not identified | — | Lu Y et al., Ribociclib Population Pharmacokinetics…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1856](https://doi.org/10.1002/jcph.1856) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2022_ATPase_activity](drugs/drug_ribociclib/pd_Zhang_2022_ATPase_activity.md) | P-gp transporter ATPase activity ← ribociclib · stimulation effect | — | Zhang L et al., Ribociclib Inhibits P-gp-Mediated Multi…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.867128](https://doi.org/10.3389/fphar.2022.867128) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:35 | 7:39 | 0/5/1 | 3/0/0 | 0/0/0 | 146,142/34,965 | openai / gpt-6-luna | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2021.pdf` | Lu Y et al., Ribociclib Population Pharmacokinetics…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1856](https://doi.org/10.1002/jcph.1856) | [33713359](https://pubmed.ncbi.nlm.nih.gov/33713359) | Human ribociclib population-PK modeling is reported, but no numeric disposition parameter values are included in the evidence. |
| `Patel_2019.pdf` | Patel YT et al., CNS penetration of the CDK4/6 inhibitor…, Cancer chemotherapy and pha… (2019) | popPK | 9 | [10.1007/s00280-019-03864-9](https://doi.org/10.1007/s00280-019-03864-9) | [31079218](https://pubmed.ncbi.nlm.nih.gov/31079218) | Mouse ribociclib PK is modeled and numeric Kp,uu values are reported, though compartmental parameter estimates are absent. |

<sub>queue written 2026-10-07T06:29:05.194517+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | André_2025 | irrelevant | 0 | 0 | This is a human ctDNA resistance-biomarker analysis and reports no ribociclib pharmacokinetic parameters. |
| popPK | Cohen_2025 | irrelevant | 1 | 0 | This is an ECG monitoring study, not a ribociclib pharmacokinetic study; the cited half-life is background information. |
| popPK | Deb_2023 | irrelevant | 1 | 0 | Ribociclib is only included in an in-silico DDI analysis, with no quantitative disposition parameters reported. |
| popPK | Ji_2023 | irrelevant | 2 | 0 | The evidence describes exposure-response analyses but reports no quantitative ribociclib disposition parameters. |
| popPK | Lu_2021 | relevant | 10 | 0 | Human ribociclib population-PK modeling is reported, but no numeric disposition parameter values are included in the evidence. |
| popPK | Roncato_2022 | irrelevant | 1 | 1 | The human case series reports ribociclib concentrations but no quantitative disposition parameters or PK model. |
| popPK | Sorf_2018 | irrelevant | 0 | 0 | This is an in-vitro transporter and enzyme interaction study with no quantitative ribociclib disposition parameters. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | This is an in vitro transporter study and reports no quantitative ribociclib disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 06:29 UTC</sub>
