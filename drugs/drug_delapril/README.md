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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

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
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_1_m_1](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_1_m_1.md) | — | general linear (no model) | 4 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_2_m_2_nrf](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_2_m_2_nrf.md) | — | general linear (no model) | 1 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_2_m_2_srf](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_2_m_2_srf.md) | — | general linear (no model) | 0 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_3_m_3](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_3_m_3.md) | — | general linear (no model) | 4 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=delapril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACE (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 34 returned
- **screened:** 7  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 4
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
