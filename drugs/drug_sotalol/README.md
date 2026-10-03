<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;sotalol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotalol_Yellepeddi2025_reference&quot;,&quot;label&quot;:&quot;Yellepeddi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sotalol

- **generic name:** sotalol
- **ATC codes:** `C07AA07`, `C07BA07`, `C07FX02`
- **DrugBank:** [DB00489](https://go.drugbank.com/drugs/DB00489) · **PubChem:** [CID 5253](https://pubchem.ncbi.nlm.nih.gov/compound/5253)
- **molar mass:** 272.364 g/mol (C12H20N2O3S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Sotalol is a methanesulfonanilide developed in 1960.[A178579] It was the first of the class III anti arrhythmic drugs.[A178579] Sotalol was first approved as an oral tablet on 30 October 1992.[L6334] A racemic mixture of sotalol is currently formulated as a tablet, oral solution, and intravenous injection indicated for life threatening ventricular arrhythmias and maintaining normal sinus rhythm in atrial fibrillation or flutter.[Label,L6373,L6376]

**Indication.** Sotalol is indicated to treat life threatening ventricular arrhytmias and maintain normal sinus rhythm in patients with atrial fibrillation or flutter.[Label] There are also oral solutions and intravenous injections indicated for patients requiring sotalol, but for whom a tablet would not be appropriate.[Label,L6373,L6376]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sotalol | parent | 272.364 | C12H20N2O3S | DrugBank | [5253](https://pubchem.ncbi.nlm.nih.gov/compound/5253) | Hanyok_1993_2, Yellepeddi_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 07:41 | 12:14 | 1/1/1 | 1/1/0 | 0/0/0 | 239,047/32,322 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Yellepeddi_2025_reference](drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Yellepeddi VK et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13302](https://doi.org/10.1002/psp4.13302) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hanyok_1993_2_reference](drugs/drug_sotalol/Sotalol_Hanyok1993v2_reference.md) | — | 1-compartment (no model) | 1 | Hanyok JJ, Clinical pharmacokinetics of sotalol, The American journal of car… (1993) | [10.1016/0002-9149(93)90021-4](https://doi.org/10.1016/0002-9149(93)90021-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gotta_2015_reference](drugs/drug_sotalol/Sotalol_Gotta2015_reference.md) | — | 1-compartment (no model) | 0 | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Dubois_2016_3H_dofetilide_displacement](drugs/drug_sotalol/pd_Dubois_2016_3H_dofetilide_displacement.md) | [3H]-dofetilide displacement ← cisapride/sotalol/moxifloxacin (test compound concentration) · direct Emax (saturable) effect | — | Dubois VF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2016) | [10.1111/bph.13558](https://doi.org/10.1111/bph.13558) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Dubois_2016_QTc](drugs/drug_sotalol/pd_Dubois_2016_QTc.md) | QTc interval ← cisapride/sotalol/moxifloxacin (test compound concentration) · direct Emax (saturable) effect | — | Dubois VF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2016) | [10.1111/bph.13558](https://doi.org/10.1111/bph.13558) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Dubois_2016_hERG_current_inhibition_patch_clamp](drugs/drug_sotalol/pd_Dubois_2016_hERG_current_inhibition_patch_clamp.md) | hERG current inhibition (patch clamp) ← cisapride/sotalol/moxifloxacin (test compound concentration) · direct Emax (saturable) effect | — | Dubois VF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2016) | [10.1111/bph.13558](https://doi.org/10.1111/bph.13558) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | [Gotta_2015_QTc](drugs/drug_sotalol/pd_Gotta_2015_QTc.md) | QTc prolongation from baseline ← moxifloxacin, dofetilide, sotalol (unbound plasma concentration) · direct sigmoid Emax (Hill) effect | — | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sotalol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…A small fraction of the doses is excreted in the feces as unchanged sotalol…”</sub> | prose |
| excretion | kidney | <sub>“…80-90% of a given dose is excreted in the urine as unchanged sotalol…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Salmon_2024.pdf` | Salmon SJ et al., Single- and multiple-dose pharmacokinet…, Journal of veterinary cardi… (2024) | popPK | 10 | [10.1016/j.jvc.2023.11.015](https://doi.org/10.1016/j.jvc.2023.11.015) | [38118234](https://pubmed.ncbi.nlm.nih.gov/38118234) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for sotalol in cats with all numeric values explicitly present in the text. |
| `Saul_2001_2.pdf` | Saul JP et al., Single-dose pharmacokinetics of sotalol…, Journal of clinical pharmac… (2001) | popPK | 10 | [10.1177/00912700122009818](https://doi.org/10.1177/00912700122009818) | [11144992](https://pubmed.ncbi.nlm.nih.gov/11144992) | The study reports quantitative PK parameters for sotalol, but specific numeric values for clearance and volume are not provided in the text, only ranges for half-life and qualitative relationships. |
| `Shi_2001.pdf` | Shi J et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2001) | popPK | 10 | [10.1023/a:1014412521191](https://doi.org/10.1023/a:1014412521191) | [11999292](https://pubmed.ncbi.nlm.nih.gov/11999292) | The paper is a population PK study of sotalol, but the specific numeric parameter estimates (CL/F, Vc/F values) are not listed in the provided text, only the model structure and covariate relationships. |
| `Hanyok_1993_2.pdf` | Hanyok JJ, Clinical pharmacokinetics of sotalol, The American journal of car… (1993) | popPK | 9 | [10.1016/0002-9149(93)90021-4](https://doi.org/10.1016/0002-9149(93)90021-4) | [8346722](https://pubmed.ncbi.nlm.nih.gov/8346722) | The text provides specific quantitative pharmacokinetic parameters for sotalol, including volume of distribution (1.2-2.4 L/kg), clearance (150 mL/min), and half-life (10-20 hours). |
| `Salazar_1997.pdf` | Salazar DE et al., A pharmacokinetic-pharmacodynamic model…, Journal of clinical pharmac… (1997) | popPK | 9 | [10.1002/j.1552-4604.1997.tb05627.x](https://doi.org/10.1002/j.1552-4604.1997.tb05627.x) | [9549633](https://pubmed.ncbi.nlm.nih.gov/9549633) | The study reports quantitative PK parameters for d-sotalol (a stereoisomer of sotalol) including specific volume of distribution values (1.20 vs 1.43 L/kg) and a three-compartment model description, but lacks explicit numeric values for clearance or other compartmental parameters in the provided text. |
| `Uematsu_1994.pdf` | Uematsu T et al., Comparative pharmacokinetic and pharmac…, The Journal of pharmacy and… (1994) | popPK | 9 | [10.1111/j.2042-7158.1994.tb03865.x](https://doi.org/10.1111/j.2042-7158.1994.tb03865.x) | [7996391](https://pubmed.ncbi.nlm.nih.gov/7996391) | The study reports quantitative PK parameters for sotalol (half-life, renal clearance trends, urinary recovery), but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided abstract text. |
| `Ritchie_1998.pdf` | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | popPK | 8 | [10.1021/js9702776](https://doi.org/10.1021/js9702776) | [9519150](https://pubmed.ncbi.nlm.nih.gov/9519150) | The paper describes a compartmental PK/PD model for sotalol, but the specific numeric parameter values (clearance, volume, rate constants) are not present in the provided evidence. |
| `Schnelle_1979.pdf` | Schnelle K et al., Studies on the pharmacokinetics and pha…, Journal of clinical pharmac… (1979) | popPK | 8 | [10.1002/j.1552-4604.1979.tb02517.x](https://doi.org/10.1002/j.1552-4604.1979.tb02517.x) | [489770](https://pubmed.ncbi.nlm.nih.gov/489770) | The paper describes a two-compartment PK model for sotalol in humans but only provides a qualitative half-life range (6-8 hours) without specific numeric values for clearance, volume, or rate constants. |

<sub>queue written 2026-09-29T07:30:58.745837+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbey_1999 | irrelevant | 2 | 0 | The study focuses on dose titration and pharmacodynamics (QTc) rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Dubois_2016 | irrelevant | 1 | 0 | The paper is an in-vitro/in-vivo mechanistic study on hERG channel inhibition and QT prolongation, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for sotalol. |
| popPK | Ritchie_1998 | relevant | 8 | 0 | The paper describes a compartmental PK/PD model for sotalol, but the specific numeric parameter values (clearance, volume, rate constants) are not present in the provided evidence. |
| popPK | Salazar_1997 | relevant | 9 | 4 | The study reports quantitative PK parameters for d-sotalol (a stereoisomer of sotalol) including specific volume of distribution values (1.20 vs 1.43 L/kg) and a three-compartment model description, but lacks explicit numeric values for clearance or other compartmental parameters in the provided text. |
| popPK | Saul_2001_2 | relevant | 10 | 2 | The study reports quantitative PK parameters for sotalol, but specific numeric values for clearance and volume are not provided in the text, only ranges for half-life and qualitative relationships. |
| popPK | Schnelle_1979 | relevant | 8 | 2 | The paper describes a two-compartment PK model for sotalol in humans but only provides a qualitative half-life range (6-8 hours) without specific numeric values for clearance, volume, or rate constants. |
| popPK | Shi_2001 | relevant | 10 | 2 | The paper is a population PK study of sotalol, but the specific numeric parameter estimates (CL/F, Vc/F values) are not listed in the provided text, only the model structure and covariate relationships. |
| popPK | Uematsu_1994 | relevant | 9 | 4 | The study reports quantitative PK parameters for sotalol (half-life, renal clearance trends, urinary recovery), but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided abstract text. |
| popPK | West_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel blockade in rabbit myocytes and does not report pharmacokinetic parameters for sotalol. |
| popPK | Wettey_2006 | irrelevant | 0 | 0 | Sotalol is used only as a beta-antagonist to confirm receptor mediation in an in-vitro mechanistic study, with no pharmacokinetic parameters reported. |
| PD | Wettey_2006 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, EC50) for salbutamol, not sotalol; sotalol is only mentioned as a qualitative antagonist used to confirm receptor mediation. |
| popPK | Wilson_1984 | irrelevant | 0 | 0 | The study is a pharmacological investigation of beta-adrenoceptor agonists and antagonists (including sotalol) in animal tissues, reporting pA2 values rather than pharmacokinetic disposition parameters. |
| PD | Wilson_1984 | not_relevant | 1 | 0 | The paper reports pA2 values (antagonist potency) for sotalol, which is a pharmacological binding/affinity parameter, not a pharmacodynamic exposure-response or dose-response relationship (e.g., Emax, EC50 for effect, or concentration-effect curve) for the drug itself. |
| popPK | Zanetti_1993 | irrelevant | 2 | 1 | The paper is a review that mentions a two-compartment model and a mean half-life of 12 hours but lacks specific quantitative values for clearance, volume of distribution, or intercompartmental clearance. |
| popPK | de_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study on beta-adrenergic receptor activity in bovine tracheal smooth muscle and does not report pharmacokinetic parameters for sotalol. |
| PD | de_2000 | not_relevant | 0 | 0 | The paper investigates beta-2 adrenergic receptor constitutive activity and inverse agonism in bovine tracheal smooth muscle; sotalol is only mentioned in a rank order of efficacy for inverse agonism without any exposure-response or dose-response PD parameters for sotalol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 07:31 UTC</sub>
