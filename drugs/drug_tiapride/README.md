<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;tiapride&quot;}]"></div>

# tiapride

- **generic name:** tiapride
- **ATC codes:** `N05AL03`
- **DrugBank:** [DB13025](https://go.drugbank.com/drugs/DB13025) · **PubChem:** [CID 5467](https://pubchem.ncbi.nlm.nih.gov/compound/5467)
- **molar mass:** 328.427 g/mol (C15H24N2O4S) — DrugBank
- **groups:** investigational

## About

Tiapride is a benzamide antipsychotic used for psychiatric and neurological conditions. It is not authorised by the European Medicines Agency and is currently considered investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416414](https://www.wikidata.org/wiki/Q416414) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tiapride | parent | 328.427 | C15H24N2O4S | DrugBank | [5467](https://pubchem.ncbi.nlm.nih.gov/compound/5467) | Huang_2026, Norman_1987, Rey_1982 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 16.6 | L/h | 16.6 l/h | patients with Huntington's disease | 6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Norman_1987_reference](drugs/drug_tiapride/Tiapride_Norman1987_reference.md) |
| V | V/F | 105 ‡ | L | 1.5 L/kg | patients with Huntington's disease | 6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Norman_1987_reference](drugs/drug_tiapride/Tiapride_Norman1987_reference.md) |
| ka | kabs | 0.219 | 1/h | 0.219 h−1 | patients with Huntington's disease | 6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Norman_1987_reference](drugs/drug_tiapride/Tiapride_Norman1987_reference.md) |
| t½ | t1/2z | 5.3 | h | 5.3 h | patients with Huntington's disease | 6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Norman_1987_reference](drugs/drug_tiapride/Tiapride_Norman1987_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub> | [Norman_1987_reference](drugs/drug_tiapride/Tiapride_Norman1987_reference.md) | — | 1-compartment (no model) | 4 | Norman T et al., Single oral dose pharmacokinetics of ti…, European journal of clinica… (1987) | [10.1007/BF02455992](https://doi.org/10.1007/BF02455992) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Huang_2026_reference](drugs/drug_tiapride/Tiapride_Huang2026_reference.md) | — | 1-compartment (no model) | 6 | Huang W et al., Population Pharmacokinetics of Tiapride…, Drug design, development an… (2026) | [10.2147/DDDT.S587387](https://doi.org/10.2147/DDDT.S587387) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Rey_1982_reference](drugs/drug_tiapride/Tiapride_Rey1982_reference.md) | — | 1-compartment (no model) | 2 | Rey E et al., Pharmacokinetics of tiapride and absolu…, International journal of cl… (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Arima_1986_D_1_binding](drugs/drug_tiapride/pd_Arima_1986_D_1_binding.md) | [3H]-cis-flupenthixol binding to D-1 dopamine receptors (rat striatum) ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Arima_1986_D_2_binding](drugs/drug_tiapride/pd_Arima_1986_D_2_binding.md) | [3H]spiperone binding to D-2 dopamine receptors (rat striatum) ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Arima_1986_D_3_binding](drugs/drug_tiapride/pd_Arima_1986_D_3_binding.md) | [3H]N-propylapomorphine binding to D-3 dopamine receptors ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Arima_1986_D_4_binding](drugs/drug_tiapride/pd_Arima_1986_D_4_binding.md) | [3H]N-propylapomorphine binding to D-4 dopamine receptors (bovine caudate nucleus) ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Lorke_2011_AChE](drugs/drug_tiapride/pd_Lorke_2011_AChE.md) | RBC AChE activity inhibition ← tiapride · inhibition effect | — | Lorke DE et al., Pretreatment for acute exposure to diis…, Journal of applied toxicolo… (2011) | [10.1002/jat.1589](https://doi.org/10.1002/jat.1589) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Petroianu_2005_2_IC50](drugs/drug_tiapride/pd_Petroianu_2005_2_IC50.md) | DDVP IC50 for cholinesterase inhibition (RBC AChE and plasma BChE) ← tiapride · direct linear effect | — | Petroianu GA et al., Weak inhibitors protect cholinesterases…, International journal of to… (2005) | [10.1080/10915810590921360](https://doi.org/10.1080/10915810590921360) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:43 | 12:50 | 0/2/1 | 3/0/0 | 0/0/0 | 402,319/12,388 | ollama / glm-5.3-flash | 9 | 0/6 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 80 matched, 65 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Halouzková_2026.pdf` | Halouzková BA et al., Population pharmacokinetic-based dose a…, Annals of medicine (2026) | popPK | 10 | [10.1080/07853890.2026.2685456](https://doi.org/10.1080/07853890.2026.2685456) | [42391036](https://pubmed.ncbi.nlm.nih.gov/42391036) | Human population-PK study of tiapride in 71 patients with renal impairment, but no numeric parameter values (CL, V, estimates) appear in the evidence — likely in tables/supplement not provided. |
| `Norman_1987.pdf` | Norman T et al., Single oral dose pharmacokinetics of ti…, European journal of clinica… (1987) | popPK | 9 | [10.1007/BF02455992](https://doi.org/10.1007/BF02455992) | [2958291](https://pubmed.ncbi.nlm.nih.gov/2958291) | Human PK study of tiapride reporting half-life (5.3 h), clearance (16.6 l/h), Cmax, and urinary recovery directly in the abstract, though volume and compartmental parameters are not given. |
| `Rey_1982.pdf` | Rey E et al., Pharmacokinetics of tiapride and absolu…, International journal of cl… (1982) | popPK | 9 | not captured | [7061180](https://pubmed.ncbi.nlm.nih.gov/7061180) | Human PK study of tiapride with two-compartment model, half-life, and renal clearance values reported directly in the abstract; some parameters (V, microconstants) not given but key values are present. |

<sub>queue written 2026-10-06T17:39:22.542194+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2026 | irrelevant | 0 | 0 | Systematic review/meta-analysis of AUD pharmacotherapy effectiveness by sex; no tiapride PK parameters reported. |
| popPK | Barry_1987 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters for tiapride. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | Costall_1987 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice; no PK parameters for tiapride are reported. |
| popPK | Doubliez_2025 | irrelevant | 0 | 0 | Tiapride is only a co-administered pharmacological probe in a fear-conditioning study; no PK parameters (CL, V, half-life, model) are reported, and drug concentrations are only mentioned as external analyses in supplementary material. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance (FAERS) disproportionality study of sedation/somnolence; tiapride is only one of 37 drugs ranked by ROR, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| PGx | Eugene_2021 | not_relevant | 0 | 0 | FAERS disproportionality analysis of sedation/somnolence; no gene variant or genotype effects on tiapride PK/PD reported. |
| popPK | Gault_2015 | irrelevant | 0 | 0 | This is a phase 2 trial of ABT-126 in Alzheimer's disease; tiapride is only mentioned as a prior concomitant medication, with no tiapride PK parameters reported. |
| popPK | Halouzková_2026 | relevant | 10 | 3 | Human population-PK study of tiapride in 71 patients with renal impairment, but no numeric parameter values (CL, V, estimates) appear in the evidence — likely in tables/supplement not provided. |
| PGx | Sakamoto_2017 | not_relevant | 0 | 0 | Reports tiapride-induced NMS as an adverse event, not a genotype-dependent PK/PD effect of tiapride. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of antiemetic efficacy; tiapride is not studied and no PK parameters appear. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | This is a conference abstracts collection on Alzheimer's disease trials; tiapride is not mentioned and no PK parameters for it appear. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 17:39 UTC</sub>
