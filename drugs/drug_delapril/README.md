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
| 2026-09-30 23:03 | 2:46 | 0/4/0 | 1/0/0 | 0/0/0 | 69,847/13,660 | ollama / glm-5.3-flash | 5 | 5/0 | 1/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_1_m_1](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_1_m_1.md) | — | general linear (no model) | 4 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_2_m_2_nrf](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_2_m_2_nrf.md) | — | general linear (no model) | 1 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_2_m_2_srf](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_2_m_2_srf.md) | — | general linear (no model) | 0 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Onoyama_1988_metabolite_3_m_3](drugs/drug_delapril/Delapril_Onoyama1988_metabolite_3_m_3.md) | — | general linear (no model) | 4 | Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ikemura_2019_CYP2J2_activity_luciferin_2J2_4F12_O_dealkylation](drugs/drug_delapril/pd_Ikemura_2019_CYP2J2_activity_luciferin_2J2_4F12_O_dealkylati.md) | CYP2J2 activity (luciferin-2J2/4F12 O-dealkylation) ← manidipine · direct Emax (saturable) effect | — | Ikemura N et al., Inhibitory effects of antihypertensive…, Chemico-biological interact… (2019) | [10.1016/j.cbi.2019.04.005](https://doi.org/10.1016/j.cbi.2019.04.005) |

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
- **screened:** 6  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shionoiri_1987_2.pdf` | Shionoiri H et al., Pharmacokinetics and acute effect on th…, Clinical nephrology (1987) | popPK | 7 | not captured | [3030595](https://pubmed.ncbi.nlm.nih.gov/3030595) | Original PK study of delapril with numeric t1/2, Cmax, AUC, and urinary excretion values present in the abstract, though no CL/V compartmental parameters are reported. |

<sub>queue written 2026-09-30T23:03:44.358328+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boschi_2000 | irrelevant | 0 | 0 | This is a pharmacodynamic dose-response efficacy study in rats with no PK parameters (CL, V, ka, half-life) or compartmental model reported for delapril. |
| popPK | Hutt_1994 | relevant | 4 | 3 | Delapril is the subject drug with PK data (AUC, urinary excretion), but no clearance, volume, half-life, or compartmental parameters are reported; only AUC/Ae values are present. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | In-vitro CYP2J2 inhibition study; delapril is only one of many tested inhibitors with an IC50, no PK disposition parameters. |
| popPK | Ishizuka_1997 | irrelevant | 0 | 0 | The paper is about temocaprilat transport; delapril is only mentioned as a non-inhibitory comparator with no PK parameters. |
| popPK | Kelly_1990 | irrelevant | 2 | 0 | A review with no original numeric PK parameters for delapril; only qualitative mentions (two active metabolites) appear. |
| popPK | Minamisawa_1990 | relevant | 6 | 2 | A human PK study of delapril as subject drug, but the evidence contains only qualitative comparisons (Cmax, AUC) with no numeric CL/V/t½ values provided. |
| popPK | Moroi_1995 | irrelevant | 0 | 0 | In-vitro vascular pharmacology study with no PK parameters for delapril; only its metabolite M-1 is mentioned as a comparator. |
| PD | Moroi_1995 | not_relevant | 2 | 1 | In vitro tissue-bath qualitative comparison of acetylcholine dose-response shifts; no numeric PD parameters (Emax, EC50, etc.) reported or derivable for delapril. |
| popPK | Nishiyama_1990 | irrelevant | 1 | 0 | This is a pharmacodynamic/clinical study of delapril's effects on renal and hormonal parameters, with no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | Onoyama_1988 | relevant | 6 | 3 | Original PK study of delapril in renal impairment, but the evidence only summarizes qualitative findings (half-life, AUC, tmax trends) without numeric parameter values, which likely reside in tables/figures not provided. |
| PD | Onoyama_1988 | not_relevant | 2 | 1 | Only qualitative PD observations (ACE activity suppressed at 4/24 h, greater BP reduction in renal failure) with no numeric PD parameters (Emax, EC50, slope) or effect-vs-concentration relationship stated or derivable. |
| popPK | Paterna_2003 | irrelevant | 0 | 0 | This is a pharmacodynamic study of fibrinolytic markers with no PK parameters (CL, V, ka, half-life, or PK model) reported for delapril. |
| popPK | Ruggenenti_2011 | irrelevant | 0 | 0 | This is a clinical outcomes trial (GFR, CV events) with no PK disposition parameters for delapril reported. |
| popPK | Ruggenenti_2012 | irrelevant | 1 | 0 | This is a clinical outcomes study of hyperfiltration in diabetes where delapril is only a treatment arm; no PK parameters for delapril are reported. |
| popPK | Sekiya_1995 | irrelevant | 0 | 0 | Delapril is only a therapeutic intervention; the PK parameters reported (insulin clearance) concern insulin, not delapril. |
| popPK | Singlas_1991 | irrelevant | 2 | 0 | This is a review that only mentions delapril as needing further study; no numeric PK parameters are reported. |
| popPK | Song_2002 | irrelevant | 1 | 0 | This is a review of other ACE inhibitors; delapril is only mentioned in a list, with no PK parameters for it. |
| PD | Song_2002 | not_relevant | 2 | 0 | Review article only qualitatively notes flat dose-response curves for ACE inhibitors; no numeric PD parameters for delapril are reported or derivable. |
| popPK | Stockis_2003 | irrelevant | 4 | 2 | A human PK study of delapril, but only relative percentage changes in Cmax/AUC/t1/2 are given in the abstract; no CL, V, or population-PK parameter values are present (likely in tables/figures not provided). |
| PD | Stockis_2003 | not_relevant | 2 | 1 | BP/HR were recorded but no concentration-effect or dose-response analysis or numeric PD parameters are reported, only qualitative statements that profiles were superimposable. |
| popPK | Stockis_2003_2 | irrelevant | 4 | 2 | A delapril PK interaction study, but evidence reports only Cmax/AUC ratios and half-life statements without quantitative disposition parameters (CL, V) or numeric half-lives. |
| popPK | Weber_1997 | irrelevant | 1 | 0 | This is a narrative review of ARBs vs ACE inhibitors with no PK parameters for delapril reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 23:01 UTC</sub>
