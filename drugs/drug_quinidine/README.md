<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;quinidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinidine_Kuroda2024_reference&quot;,&quot;label&quot;:&quot;Kuroda_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# quinidine

- **generic name:** quinidine
- **ATC codes:** `C01BA01`
- **DrugBank:** [DB00908](https://go.drugbank.com/drugs/DB00908) · **PubChem:** [CID 441074](https://pubchem.ncbi.nlm.nih.gov/compound/441074)
- **molar mass:** 324.4168 g/mol (C20H24N2O2) — DrugBank
- **groups:** approved

## About

Quinidine is a class Ia antiarrhythmic used to treat heart rhythm problems such as atrial fibrillation. It is an approved medicine, though it is not widely used today and has largely been replaced by newer antiarrhythmic drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412496](https://www.wikidata.org/wiki/Q412496) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quinidine | parent | 324.417 | C20H24N2O2 | DrugBank | [441074](https://pubchem.ncbi.nlm.nih.gov/compound/441074) | Fattinger_1991_2, Kuroda_2024, Ueda_1980 |
| 6'-hydroxycinchonine | metabolite | 340.423 | C20H24N2O3 | PubChem | [13217486](https://pubchem.ncbi.nlm.nih.gov/compound/13217486) | Ueda_1980 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:35 | 13:51 | 2/2/1 | 1/0/0 | 0/0/0 | 230,976/41,472 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 4/4 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kuroda_2024_reference](drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md) | ▶ model + simulator | 2-compartment, oral | 13 | Kuroda T et al., Rational quinidine dosage regimen for a…, Frontiers in veterinary sci… (2024) | [10.3389/fvets.2024.1454342](https://doi.org/10.3389/fvets.2024.1454342) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Rakhit_1984_reference](drugs/drug_quinidine/Quinidine_Rakhit1984_reference.md) | model (no simulator) | 1-compartment general linear | 5 | Rakhit A et al., Pharmacokinetics of quinidine and three…, Journal of pharmacokinetics… (1984) | [10.1007/BF01063608](https://doi.org/10.1007/BF01063608) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.947). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q26 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Fattinger_1991_2_reference](drugs/drug_quinidine/Quinidine_Fattinger1991v2_reference.md) | — | 2-compartment (no model) | 6 (+1 cov.) | Fattinger K et al., Population pharmacokinetics of quinidine, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05531.x](https://doi.org/10.1111/j.1365-2125.1991.tb05531.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ueda_1980_reference](drugs/drug_quinidine/Quinidine_Ueda1980_reference.md) | — | parent + metabolite (no model) | 1 | Ueda CT et al., Comparative pharmacokinetics of quinidi…, Journal of pharmaceutical s… (1980) | [10.1002/jps.2600691212](https://doi.org/10.1002/jps.2600691212) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Verme_1992_reference](drugs/drug_quinidine/Quinidine_Verme1992_reference.md) | — | 1-compartment (no model) | 0 | Verme CN et al., Pharmacokinetics of quinidine in male p…, Clinical pharmacokinetics (1992) | [10.2165/00003088-199222060-00005](https://doi.org/10.2165/00003088-199222060-00005) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Karbwang_1993_QTc](drugs/drug_quinidine/pd_Karbwang_1993_QTc.md) | rate-corrected QT interval ← quinidine · direct linear effect | — | Karbwang J et al., A comparison of the pharmacokinetic and…, British journal of clinical… (1993) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=quinidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate, `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLC22A4` inhibitor, `SLC22A5` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A7` substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A2` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), KCNH2 (inhibitor), KCNK1 (inhibitor), KCNK6 (inhibitor), SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 114 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guentert_1979.pdf` | Guentert TW et al., Quinidine pharmacokinetics in man: choi…, Journal of pharmacokinetics… (1979) | popPK | 10 | [10.1007/BF01062532](https://doi.org/10.1007/BF01062532) | [512840](https://pubmed.ncbi.nlm.nih.gov/512840) | The paper reports quantitative pharmacokinetic parameters (V1, Vdarea, clearance, rate constants) for quinidine in humans with specific numeric values provided in the text. |
| `Karbwang_1993.pdf` | Karbwang J et al., A comparison of the pharmacokinetic and…, British journal of clinical… (1993) | popPK | 10 | not captured | [8471402](https://pubmed.ncbi.nlm.nih.gov/8471402) | The abstract explicitly reports quantitative pharmacokinetic parameters for quinidine, including clearance, volume of distribution, and half-life. |
| `Rakhit_1984.pdf` | Rakhit A et al., Pharmacokinetics of quinidine and three…, Journal of pharmacokinetics… (1984) | popPK | 10 | [10.1007/BF01063608](https://doi.org/10.1007/BF01063608) | [6747817](https://pubmed.ncbi.nlm.nih.gov/6747817) | The paper reports quantitative two-compartment pharmacokinetic parameters (Vl, clearance, rate constants) for quinidine in humans, with all numeric values explicitly provided in the text. |
| `Ueda_1980.pdf` | Ueda CT et al., Comparative pharmacokinetics of quinidi…, Journal of pharmaceutical s… (1980) | popPK | 10 | [10.1002/jps.2600691212](https://doi.org/10.1002/jps.2600691212) | [7463324](https://pubmed.ncbi.nlm.nih.gov/7463324) | The study reports quantitative two-compartment PK parameters (half-lives, Vd, clearance) for quinidine in rabbits, with specific numeric values provided in the abstract. |
| `Verme_1992.pdf` | Verme CN et al., Pharmacokinetics of quinidine in male p…, Clinical pharmacokinetics (1992) | popPK | 10 | [10.2165/00003088-199222060-00005](https://doi.org/10.2165/00003088-199222060-00005) | [1587058](https://pubmed.ncbi.nlm.nih.gov/1587058) | The abstract reports quantitative population PK parameters for quinidine in humans, including mean Vd (~230 L) and variability metrics, though specific clearance values are described qualitatively or via covariate effects rather than a single mean number. |

<sub>queue written 2026-10-06T04:23:09.371477+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergenholm_2016 | irrelevant | 2 | 0 | The study focuses on PKPD modeling of cardiac safety endpoints (PR/QRS intervals) in dogs, and while quinidine is a test compound, no quantitative PK disposition parameters (CL, V, etc.) are reported in the evidence. |
| popPK | Kharasch_2004 | irrelevant | 0 | 0 | Quinidine is used as a P-gp inhibitor probe to study methadone pharmacokinetics, not as the subject drug for PK parameter estimation. |
| popPK | Luo_2017 | irrelevant | 0 | 0 | The study is a computational simulation of cardiac electrophysiology (action potentials and re-entry) using quinidine as a channel blocker, and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Nishimura_1990 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of quinidine's mechanism of action on ion channels in rabbit tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Nyberg_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of edoxaban, with quinidine mentioned only as a concomitant P-gp inhibitor for dose adjustment. |
| PD | Nyberg_2016 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for edoxaban, not quinidine; quinidine is only mentioned as a P-glycoprotein inhibitor affecting edoxaban dosing. |
| popPK | Ohtani_1996 | irrelevant | 2 | 0 | The study focuses on PK-PD modeling of ECG effects (QT prolongation) rather than reporting standard disposition parameters (CL, V, ka) for quinidine, and no numeric PK parameter values are present in the evidence. |
| PD | Ohtani_1996 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding quinidine or pharmacodynamics. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assessment of quinoline analogues (including quinidine) against coronaviruses, reporting EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atogepant, with quinidine mentioned only as a co-administered drug affecting atogepant clearance. |
| popPK | Vazzana_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of novel antiarrhythmic compounds using quinidine only as a comparator, with no pharmacokinetic parameters reported. |
| PD | Vazzana_2007 | not_relevant | 4 | 2 | The text mentions dose-dependent effects and compares potency to quinidine but does not provide specific numeric PD parameters (EC50, Emax) or extractable concentration-effect curves for quinidine. |
| popPK | Williams_1992 | irrelevant | 1 | 0 | The study models the pharmacokinetics of digoxin, using quinidine only as a covariate to explain changes in digoxin clearance, rather than reporting PK parameters for quinidine itself. |
| popPK | Winkle_1975 | irrelevant | 0 | 0 | The paper is a general review of pharmacologic therapy for arrhythmias and does not report specific quantitative pharmacokinetic parameters for quinidine. |
| popPK | Yin_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of edoxaban, with quinidine serving only as a co-administered P-gp inhibitor to assess drug-drug interactions, not as the subject drug. |
| PD | Yin_2014 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of edoxaban and its interaction with quinidine (as a P-gp inhibitor), but does not report a pharmacodynamic or exposure-response relationship for quinidine itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 04:23 UTC</sub>
