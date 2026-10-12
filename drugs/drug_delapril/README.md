<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;delapril&quot;}]"></div>

# delapril

- **generic name:** delapril
- **ATC codes:** `C09AA12`, `C09BA12`, `C09BB12`
- **DrugBank:** [DB13312](https://go.drugbank.com/drugs/DB13312) · **PubChem:** not captured
- **molar mass:** 452.551 g/mol (C26H32N2O5) — DrugBank
- **groups:** investigational

## About

Delapril is an ACE inhibitor antihypertensive drug used to treat arterial hypertension. It is not authorised in the European Union and is classed as investigational in DrugBank, so its use appears limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1164067](https://www.wikidata.org/wiki/Q1164067) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| delapril (CV-3317) | metabolite | 489.01 | — | the paper | — | Onoyama_1988 |
| M-1 (CV-3317-COOH) | metabolite | 424.497 | C24H28N2O5 | PubChem | [5488746](https://pubchem.ncbi.nlm.nih.gov/compound/5488746) | Onoyama_1988 |
| M-2 (DKP-COOH) | metabolite | — (mass units only) | — | — | — | — |
| M-3 (CV-3317-(5-OH)-COOH) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:38 | 1:41 | 0/4/0 | 0/0/0 | 0/0/0 | 50,907/2,442 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 5/0 | 1/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_1_m_1](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_1_m_1.md) | — | general linear (no model) | 4 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_2_m_2_nrf](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_2_m_2_nrf.md) | — | general linear (no model) | 1 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_2_m_2_srf](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_2_m_2_srf.md) | — | general linear (no model) | 0 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_3_m_3](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_3_m_3.md) | — | general linear (no model) | 4 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 34 returned
- **screened:** 7  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 4
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shionoiri_1987_2.pdf` | Shionoiri H et al., Pharmacokinetics and acute effect on th…, Clinical nephrology (1987) | popPK | 9 | not captured | [3030595](https://pubmed.ncbi.nlm.nih.gov/3030595) | The study reports quantitative pharmacokinetic parameters (half-life, Cmax, AUC) for delapril and its active metabolites in humans, with values explicitly listed in the abstract. |
| `Hutt_1994.pdf` | Hutt V et al., Bioavailability and pharmacokinetics of…, European journal of drug me… (1994) | popPK | 8 | [10.1007/BF03188824](https://doi.org/10.1007/BF03188824) | [7957454](https://pubmed.ncbi.nlm.nih.gov/7957454) | The study reports quantitative PK parameters (AUC, urinary excretion) for delapril and its metabolites in humans, but lacks specific clearance (CL) or volume (V) values. |
| `Stockis_2003.pdf` | Stockis A et al., Pharmacokinetics and tolerability of a…, Arzneimittel-Forschung (2003) | popPK | 8 | [10.1055/s-0031-1297149](https://doi.org/10.1055/s-0031-1297149) | [13677245](https://pubmed.ncbi.nlm.nih.gov/13677245) | The study reports pharmacokinetic parameters (AUC, Cmax, t1/2) for delapril in humans, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-07T05:38:01.737758+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boschi_2000 | irrelevant | 0 | 0 | The study is a long-term survival and blood pressure analysis in rats, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for delapril. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | In-vitro CYP2J2 inhibition study; delapril is only one of many tested inhibitors with an IC50, no PK disposition parameters. |
| popPK | Ishizuka_1997 | irrelevant | 0 | 0 | The study focuses on the biliary excretion mechanism of temocaprilat in rats, and delapril is only mentioned as a comparator that did not affect transport. |
| popPK | Kelly_1990 | irrelevant | 1 | 0 | This is a review article that provides only qualitative descriptions and general ranges for ACE inhibitors, lacking specific quantitative PK parameter values for delapril. |
| popPK | Moroi_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation mechanisms using delapril's metabolite as a comparator, not a pharmacokinetic study. |
| PD | Moroi_1995 | not_relevant | 2 | 1 | In vitro tissue-bath qualitative comparison of acetylcholine dose-response shifts; no numeric PD parameters (Emax, EC50, etc.) reported or derivable for delapril. |
| popPK | Nishiyama_1990 | irrelevant | 0 | 0 | The study reports hemodynamic and hormonal effects (renal function, RAAS, kallikrein-kinin) rather than pharmacokinetic disposition parameters (CL, V, ka, t1/2) for delapril. |
| PD | Onoyama_1988 | not_relevant | 2 | 1 | Only qualitative PD observations (ACE activity suppressed at 4/24 h, greater BP reduction in renal failure) with no numeric PD parameters (Emax, EC50, slope) or effect-vs-concentration relationship stated or derivable. |
| popPK | Paterna_2003 | irrelevant | 0 | 0 | The study evaluates the effects of delapril on fibrinolytic parameters (t-PA and PAI-1) rather than reporting pharmacokinetic disposition parameters for delapril itself. |
| popPK | Ruggenenti_2011 | irrelevant | 0 | 0 | This is a clinical trial assessing nephroprotection and cardiovascular outcomes, not a pharmacokinetic study reporting disposition parameters for delapril. |
| popPK | Ruggenenti_2012 | irrelevant | 0 | 0 | The study focuses on renal function (GFR) and nephropathy progression in diabetic patients, using delapril only as a background treatment/comparator, and does not report pharmacokinetic parameters for delapril. |
| popPK | Sekiya_1995 | irrelevant | 0 | 0 | The study focuses on insulin sensitivity and secretion in hypertensive patients, using delapril only as a therapeutic agent to lower blood pressure, without reporting pharmacokinetic parameters for delapril itself. |
| popPK | Singlas_1991 | irrelevant | 1 | 0 | The paper is a review that explicitly states delapril's disposition is "not well documented" and does not provide any original quantitative pharmacokinetic parameter values. |
| popPK | Song_2002 | irrelevant | 0 | 0 | The paper is a review of newer ACE inhibitors (trandolapril, moexipril, etc.) and delapril is only listed as an established agent without specific quantitative PK parameters provided. |
| PD | Song_2002 | not_relevant | 2 | 0 | Review article only qualitatively notes flat dose-response curves for ACE inhibitors; no numeric PD parameters for delapril are reported or derivable. |
| popPK | Stockis_2003 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (AUC, Cmax, t1/2) for delapril in humans, but the specific numeric values are not present in the provided abstract text. |
| PD | Stockis_2003 | not_relevant | 2 | 1 | BP/HR were recorded but no concentration-effect or dose-response analysis or numeric PD parameters are reported, only qualitative statements that profiles were superimposable. |
| popPK | Stockis_2003_2 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial where delapril is a co-administered agent, and no absolute quantitative PK parameters (CL, V, ka) are reported, only relative changes. |
| popPK | Weber_1997 | irrelevant | 0 | 0 | The paper is a review comparing pharmacologic mechanisms and clinical effects of ACE inhibitors and AT1 blockers, containing no quantitative pharmacokinetic parameters for delapril. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:38 UTC</sub>
