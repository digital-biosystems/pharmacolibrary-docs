<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;sotalol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotalol_Yellepeddi2025_reference&quot;,&quot;label&quot;:&quot;Yellepeddi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sotalol

- **generic name:** sotalol
- **ATC codes:** `C07AA07`, `C07BA07`, `C07FX02`
- **DrugBank:** [DB00489](https://go.drugbank.com/drugs/DB00489) · **PubChem:** [CID 5253](https://pubchem.ncbi.nlm.nih.gov/compound/5253)
- **molar mass:** 272.364 g/mol (C12H20N2O3S) — DrugBank
- **groups:** approved, investigational

## About

Sotalol is a non-selective beta blocker with additional antiarrhythmic activity, used to treat heart rhythm problems such as atrial fibrillation, ventricular fibrillation, and supraventricular tachycardia. It is an approved medicine that remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413591](https://www.wikidata.org/wiki/Q413591) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sotalol | parent | 272.364 | C12H20N2O3S | DrugBank | [5253](https://pubchem.ncbi.nlm.nih.gov/compound/5253) | Hanyok_1993_2, Salazar_1997, Yellepeddi_2025 |
| d-sotalol | metabolite | 272.363 | C12H20N2O3S | PubChem | [119259](https://pubchem.ncbi.nlm.nih.gov/compound/119259) | Salazar_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:23 | 9:19 | 1/1/2 | 4/1/1 | 0/0/0 | 171,252/26,597 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.952). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Yellepeddi_2025_reference](drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Yellepeddi VK et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13302](https://doi.org/10.1002/psp4.13302) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hanyok_1993_2_reference](drugs/drug_sotalol/Sotalol_Hanyok1993v2_reference.md) | — | 1-compartment (no model) | 1 | Hanyok JJ, Clinical pharmacokinetics of sotalol, The American journal of car… (1993) | [10.1016/0002-9149(93)90021-4](https://doi.org/10.1016/0002-9149(93)90021-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Salazar_1997_reference](drugs/drug_sotalol/Sotalol_Salazar1997_reference.md) | — | 1-compartment (no model) | 1 | Salazar DE et al., A pharmacokinetic-pharmacodynamic model…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05627.x](https://doi.org/10.1002/j.1552-4604.1997.tb05627.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gotta_2015_reference](drugs/drug_sotalol/Sotalol_Gotta2015_reference.md) | — | 1-compartment (no model) | 0 | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbey_1999_QTc](drugs/drug_sotalol/pd_Barbey_1999_QTc.md) | QTc ← sotalol · direct linear effect | — | Barbey JT et al., Pharmacokinetic, pharmacodynamic, and s…, Clinical pharmacology and t… (1999) | [10.1016/S0009-9236(99)70058-5](https://doi.org/10.1016/S0009-9236(99)70058-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Dubois_2016_Inhibition](drugs/drug_sotalol/pd_Dubois_2016_Inhibition.md) | hERG channel inhibition ← sotalol · direct sigmoid Emax (Hill) effect | — | Dubois VF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2016) | [10.1111/bph.13558](https://doi.org/10.1111/bph.13558) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ritchie_1998_HR](drugs/drug_sotalol/pd_Ritchie_1998_HR.md) | spontaneous heart rate ← sotalol · delayed effect through an effect compartment | — | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | [10.1021/js9702776](https://doi.org/10.1021/js9702776) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ritchie_1998_PR](drugs/drug_sotalol/pd_Ritchie_1998_PR.md) | electrocardiographic PR interval ← sotalol · delayed effect through an effect compartment | — | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | [10.1021/js9702776](https://doi.org/10.1021/js9702776) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ritchie_1998_dP_dtmax](drugs/drug_sotalol/pd_Ritchie_1998_dP_dtmax.md) | contractile index peak positive rate of left ventricular pressure rise ← sotalol · delayed effect through an effect compartment | — | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | [10.1021/js9702776](https://doi.org/10.1021/js9702776) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Salazar_1997_Q_Tc](drugs/drug_sotalol/pd_Salazar_1997_Q_Tc.md) | Q-Tc interval ← d-sotalol · direct sigmoid Emax (Hill) effect | — | Salazar DE et al., A pharmacokinetic-pharmacodynamic model…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05627.x](https://doi.org/10.1002/j.1552-4604.1997.tb05627.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Dubois_2016_Displacement](drugs/drug_sotalol/pd_Dubois_2016_Displacement.md) | displacement of [3H]-dofetilide ← sotalol · direct Emax (saturable) effect | model (no simulator) | Dubois VF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2016) | [10.1111/bph.13558](https://doi.org/10.1111/bph.13558) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | [Gotta_2015_QTc](drugs/drug_sotalol/pd_Gotta_2015_QTc.md) | QTc ← sotalol · direct sigmoid Emax (Hill) effect | model (no simulator) | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Uematsu_1994_QTc](drugs/drug_sotalol/pd_Uematsu_1994_QTc.md) | QTc interval ← (+)-sotalol · delayed effect through an effect compartment | — | Uematsu T et al., Comparative pharmacokinetic and pharmac…, The Journal of pharmacy and… (1994) | [10.1111/j.2042-7158.1994.tb03865.x](https://doi.org/10.1111/j.2042-7158.1994.tb03865.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sotalol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Salazar_1997.pdf` | Salazar DE et al., A pharmacokinetic-pharmacodynamic model…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1002/j.1552-4604.1997.tb05627.x](https://doi.org/10.1002/j.1552-4604.1997.tb05627.x) | [9549633](https://pubmed.ncbi.nlm.nih.gov/9549633) | The study reports a compartmental PK model for d-sotalol in humans with specific numeric values for steady-state volume of distribution (1.20 vs 1.43 L/kg) and effect compartment clearance, though primary clearance and central volume values are not explicitly listed in the text. |
| `Salmon_2024.pdf` | Salmon SJ et al., Single- and multiple-dose pharmacokinet…, Journal of veterinary cardi… (2024) | popPK | 10 | [10.1016/j.jvc.2023.11.015](https://doi.org/10.1016/j.jvc.2023.11.015) | [38118234](https://pubmed.ncbi.nlm.nih.gov/38118234) | The study reports quantitative non-compartmental pharmacokinetic parameters (clearance, volume, half-life, bioavailability) for sotalol in cats with all numeric values present in the text. |
| `Saul_2001_2.pdf` | Saul JP et al., Single-dose pharmacokinetics of sotalol…, Journal of clinical pharmac… (2001) | popPK | 10 | [10.1177/00912700122009818](https://doi.org/10.1177/00912700122009818) | [11144992](https://pubmed.ncbi.nlm.nih.gov/11144992) | The study reports quantitative PK parameters (half-life, clearance, volume) for sotalol in humans, but specific numeric values for CL and V are described as having relationships with covariates rather than listing a single fixed value, and detailed tables are not included in the text. |
| `Shi_2001.pdf` | Shi J et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2001) | popPK | 10 | [10.1023/a:1014412521191](https://doi.org/10.1023/a:1014412521191) | [11999292](https://pubmed.ncbi.nlm.nih.gov/11999292) | The paper reports a population PK model for sotalol in pediatric patients, but the specific numeric parameter estimates (CL/F, Vc/F values) are not provided in the text, only the model structure and covariate relationships. |
| `Hanyok_1993_2.pdf` | Hanyok JJ, Clinical pharmacokinetics of sotalol, The American journal of car… (1993) | popPK | 9 | [10.1016/0002-9149(93)90021-4](https://doi.org/10.1016/0002-9149(93)90021-4) | [8346722](https://pubmed.ncbi.nlm.nih.gov/8346722) | The abstract provides specific quantitative pharmacokinetic parameters for sotalol in humans, including volume of distribution (1.2-2.4 L/kg), clearance (150 mL/min), and half-life (10-20 hours). |
| `Uematsu_1994.pdf` | Uematsu T et al., Comparative pharmacokinetic and pharmac…, The Journal of pharmacy and… (1994) | popPK | 9 | [10.1111/j.2042-7158.1994.tb03865.x](https://doi.org/10.1111/j.2042-7158.1994.tb03865.x) | [7996391](https://pubmed.ncbi.nlm.nih.gov/7996391) | The study reports quantitative PK parameters (half-life, renal clearance, urinary recovery) for sotalol in humans, but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided abstract text. |
| `Ritchie_1998.pdf` | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | popPK | 8 | [10.1021/js9702776](https://doi.org/10.1021/js9702776) | [9519150](https://pubmed.ncbi.nlm.nih.gov/9519150) | The study reports a two-compartment PK model for sotalol in humans, but specific numeric parameter values (CL, V, K21, etc.) are not explicitly listed in the provided text. |
| `Schnelle_1979.pdf` | Schnelle K et al., Studies on the pharmacokinetics and pha…, Journal of clinical pharmac… (1979) | popPK | 8 | [10.1002/j.1552-4604.1979.tb02517.x](https://doi.org/10.1002/j.1552-4604.1979.tb02517.x) | [489770](https://pubmed.ncbi.nlm.nih.gov/489770) | The study reports a two-compartment model and half-life for sotalol in humans, but specific numeric values for clearance, volume, or rate constants are not provided in the text. |

<sub>queue written 2026-10-07T01:15:08.271660+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbey_1999 | irrelevant | 2 | 0 | The study reports plasma concentrations and pharmacodynamic effects (QTc) but does not provide quantitative disposition parameters (CL, V, ka) or a compartmental model in the provided text. |
| popPK | Dubois_2016 | irrelevant | 1 | 0 | The study focuses on in vitro hERG channel inhibition and in vivo QT prolongation (pharmacodynamics) in dogs and humans, not on the quantitative pharmacokinetic disposition parameters (CL, V, ka) of sotalol. |
| popPK | Ritchie_1998 | relevant | 8 | 2 | The study reports a two-compartment PK model for sotalol in humans, but specific numeric parameter values (CL, V, K21, etc.) are not explicitly listed in the provided text. |
| popPK | Schnelle_1979 | relevant | 8 | 2 | The study reports a two-compartment model and half-life for sotalol in humans, but specific numeric values for clearance, volume, or rate constants are not provided in the text. |
| popPK | Shi_2001 | relevant | 10 | 2 | The paper reports a population PK model for sotalol in pediatric patients, but the specific numeric parameter estimates (CL/F, Vc/F values) are not provided in the text, only the model structure and covariate relationships. |
| popPK | Uematsu_1994 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-life, renal clearance, urinary recovery) for sotalol in humans, but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided abstract text. |
| popPK | West_1996 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of channel blockade in rabbit myocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wettey_2006 | irrelevant | 0 | 0 | Sotalol is used only as a beta-antagonist to confirm receptor mediation in an in-vitro mechanistic study, with no pharmacokinetic parameters reported. |
| PD | Wettey_2006 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, EC50) for salbutamol, not sotalol; sotalol is only mentioned as a qualitative antagonist used to confirm receptor mediation. |
| popPK | Wilson_1984 | irrelevant | 0 | 0 | The study is a pharmacological investigation of beta-adrenoceptor agonists and antagonists (including sotalol) in rat tissues, reporting pA2 values rather than pharmacokinetic parameters. |
| PD | Wilson_1984 | not_relevant | 1 | 0 | The paper reports pA2 values (antagonist potency) for sotalol, which is a pharmacological binding/affinity parameter, not a pharmacodynamic exposure-response or dose-response relationship (e.g., Emax, EC50 for effect, or concentration-effect curve) for the drug itself. |
| popPK | Zanetti_1993 | irrelevant | 2 | 0 | This is a review article that summarizes general pharmacokinetic properties (e.g., half-life of 12 hours) but does not report original quantitative disposition parameters (CL, V, Q, ka) or a specific population PK model with numeric values. |
| popPK | de_2000 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of beta-adrenergic receptors in bovine tracheal smooth muscle and does not report pharmacokinetic parameters for sotalol. |
| PD | de_2000 | not_relevant | 0 | 0 | The paper investigates beta-2 adrenergic receptor constitutive activity and inverse agonism in bovine tracheal smooth muscle; sotalol is only mentioned in a rank order of efficacy for inverse agonism without any exposure-response or dose-response PD parameters for sotalol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:15 UTC</sub>
