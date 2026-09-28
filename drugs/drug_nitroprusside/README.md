<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;nitroprusside&quot;}]"></div>

# nitroprusside

- **generic name:** nitroprusside
- **ATC codes:** `C02DD01`
- **DrugBank:** [DB00325](https://go.drugbank.com/drugs/DB00325) · **PubChem:** [CID 11963622](https://pubchem.ncbi.nlm.nih.gov/compound/11963622)
- **molar mass:** 215.938 g/mol (C5FeN6O) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Nitroprusside serves as a source of nitric oxide, a potent peripheral vasodilator that affects both arterioles and venules (venules more than arterioles). Nitroprusside is often administered intravenously to patients who are experiencing a hypertensive emergency.

**Indication.** For immediate reduction of blood pressure of patients in hypertensive crises, reduce bleeding during surgery, and for the treatment of acute congestive heart failure

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 02:41 | 2:07:43 | 0/0/0 | 0/2/0 | 0/0/0 | 425,830/21,908 | ollama / qwen3.8:27b-mtp-q8_0 | 32 | 6/26 | 29/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span> | [Barrett_2015](drugs/drug_nitroprusside/pd_Barrett_2015_MAP.md) | Barrett JS et al., A hemodynamic model to guide blood pres…, Frontiers in pharmacology (2015) | [10.3389/fphar.2015.00151](https://doi.org/10.3389/fphar.2015.00151) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Dahan_2024](drugs/drug_nitroprusside/pd_Dahan_2024_PPT.md) | Dahan A et al., Nitric Oxide Donor Sodium Nitroprusside…, ACS pharmacology & translat… (2024) | [10.1021/acsptsci.4c00133](https://doi.org/10.1021/acsptsci.4c00133) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nitroprusside) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor | DrugBank actor |
| excretion | kidney | <sub>“…de to produce thiocyanate, thiocyanate is eliminated in the urine.…”</sub> | prose |

<sub>Actors without a tissue in the table: GUCY1A1 (modulator), GUCY1B1 (modulator), ITPR1 (target), ITPR2 (target), ITPR3 (target), NPR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2093 matched, 219 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arishe_2019.pdf` | Arishe O et al., L-arginase induces vascular dysfunction…, Journal of African Associat… (2019) | pd | 5 | not captured | [32123770](https://www.ncbi.nlm.nih.gov/pubmed/32123770) | metadata signals extractable PD data (Emax) |
| `Discigil_2008.pdf` | Discigil B et al., High-frequency ultrasonic waves cause e…, Revista brasileira de cirur… (2008) | pd | 5 | [10.1590/s0102-76382008000200007](https://doi.org/10.1590/s0102-76382008000200007) | [18820781](https://www.ncbi.nlm.nih.gov/pubmed/18820781) | metadata signals extractable PD data (EC50) |
| `Guers_2017.pdf` | Guers JJ et al., Intermittent parathyroid hormone admini…, Journal of applied physiolo… (2017) | pd | 5 | [10.1152/japplphysiol.00348.2016](https://doi.org/10.1152/japplphysiol.00348.2016) | [27815368](https://www.ncbi.nlm.nih.gov/pubmed/27815368) | metadata signals extractable PD data (Emax) |
| `Kamp_2021.pdf` | Kamp J et al., Stereoselective ketamine effect on card…, British journal of anaesthe… (2021) | pd | 5 | [10.1016/j.bja.2021.02.034](https://doi.org/10.1016/j.bja.2021.02.034) | [33896589](https://www.ncbi.nlm.nih.gov/pubmed/33896589) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Morris_2007.pdf` | Morris RW et al., "Orpheus" cardiopulmonary bypass simula…, The journal of extra-corpor… (2007) | pd | 5 | not captured | [18293807](https://www.ncbi.nlm.nih.gov/pubmed/18293807) | metadata signals extractable PD data (effectcompartment) |
| `Buzinari_2017.pdf` | Buzinari TC et al., Treatment with sodium nitroprusside imp…, European journal of pharmac… (2017) | pd | 4 | [10.1016/j.ejps.2017.04.022](https://doi.org/10.1016/j.ejps.2017.04.022) | [28456572](https://www.ncbi.nlm.nih.gov/pubmed/28456572) | metadata signals extractable PD data (concentration-effect) |
| `Chen_1991.pdf` | Chen J et al., Sodium nitroprusside degenerates cultur…, Neuroreport (1991) | pd | 4 | [10.1097/00001756-199103000-00002](https://doi.org/10.1097/00001756-199103000-00002) | [1662993](https://www.ncbi.nlm.nih.gov/pubmed/1662993) | metadata signals extractable PD data (EC50) |
| `Chinnathambi_2014.pdf` | Chinnathambi V et al., Elevated testosterone levels during rat…, Hypertension (Dallas, Tex.… (2014) | pd | 4 | [10.1161/HYPERTENSIONAHA.114.03283](https://doi.org/10.1161/HYPERTENSIONAHA.114.03283) | [24842922](https://www.ncbi.nlm.nih.gov/pubmed/24842922) | metadata signals extractable PD data (Emax) |
| `Cupitra_2020.pdf` | Cupitra NI et al., Influence of Ageing on Vascular Reactiv…, Clinical interventions in a… (2020) | pd | 4 | [10.2147/CIA.S236173](https://doi.org/10.2147/CIA.S236173) | [32368020](https://www.ncbi.nlm.nih.gov/pubmed/32368020) | metadata signals extractable PD data (Emax) |
| `Cybularz_2017.pdf` | Cybularz M et al., Endothelial function and gene expressio…, Atherosclerosis. Supplements (2017) | pd | 4 | [10.1016/j.atherosclerosissup.2017.05.042](https://doi.org/10.1016/j.atherosclerosissup.2017.05.042) | [29096831](https://www.ncbi.nlm.nih.gov/pubmed/29096831) | metadata signals extractable PD data (EC50) |
| `Demirci_2013.pdf` | Demirci B et al., Treated effect of silymarin on vascular…, Pharmaceutical biology (2013) | pd | 4 | [10.3109/13880209.2013.842597](https://doi.org/10.3109/13880209.2013.842597) | [24188646](https://www.ncbi.nlm.nih.gov/pubmed/24188646) | metadata signals extractable PD data (Emax) |
| `Khalili_2020.pdf` | Khalili A et al., Liposomal and Non-Liposomal Formulation…, Iranian journal of medical… (2020) | pd | 4 | [10.30476/ijms.2019.45310](https://doi.org/10.30476/ijms.2019.45310) | [32038058](https://www.ncbi.nlm.nih.gov/pubmed/32038058) | metadata signals extractable PD data (Emax) |
| `Merkel_1992.pdf` | Merkel LA et al., Modulation of vascular reactivity by va…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90838-u](https://doi.org/10.1016/0014-2999(92)90838-u) | [1468495](https://www.ncbi.nlm.nih.gov/pubmed/1468495) | metadata signals extractable PD data (EC50) |
| `Serpa_2014.pdf` | Serpa A et al., Modulation of cGMP accumulation by aden…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.09.045](https://doi.org/10.1016/j.ejphar.2014.09.045) | [25300679](https://www.ncbi.nlm.nih.gov/pubmed/25300679) | metadata signals extractable PD data (EC50) |
| `Southam_1991.pdf` | Southam E et al., Intercellular action of nitric oxide in…, Neuroreport (1991) | pd | 4 | [10.1097/00001756-199111000-00006](https://doi.org/10.1097/00001756-199111000-00006) | [1687356](https://www.ncbi.nlm.nih.gov/pubmed/1687356) | metadata signals extractable PD data (IC50) |
| `Suzuki_1995.pdf` | Suzuki H et al., Vasodilator response of mesenteric arte…, Hypertension (Dallas, Tex.… (1995) | pd | 4 | [10.1161/01.hyp.26.3.397](https://doi.org/10.1161/01.hyp.26.3.397) | [7649572](https://www.ncbi.nlm.nih.gov/pubmed/7649572) | metadata signals extractable PD data (EC50) |
| `Tucker_2017.pdf` | Tucker MA et al., Effect of hypohydration on postsynaptic…, American journal of physiol… (2017) | pd | 4 | [10.1152/ajpregu.00525.2016](https://doi.org/10.1152/ajpregu.00525.2016) | [28202441](https://www.ncbi.nlm.nih.gov/pubmed/28202441) | metadata signals extractable PD data (EC50) |
| `Turner_1995.pdf` | Turner NC et al., Effects of genetic hyperinsulinaemia on…, Journal of cardiovascular p… (1995) | pd | 4 | [10.1097/00005344-199511000-00007](https://doi.org/10.1097/00005344-199511000-00007) | [8637185](https://www.ncbi.nlm.nih.gov/pubmed/8637185) | metadata signals extractable PD data (EC50) |
| `Wang_2010.pdf` | Wang X et al., Ginsenoside Rg1 improves male copulator…, The journal of sexual medic… (2010) | pd | 4 | [10.1111/j.1743-6109.2009.01482.x](https://doi.org/10.1111/j.1743-6109.2009.01482.x) | [19751391](https://www.ncbi.nlm.nih.gov/pubmed/19751391) | metadata signals extractable PD data (IC50) |
| `Weissman_1990.pdf` | Weissman BA et al., Interactions between nitrogen oxide-con…, FEBS letters (1990) | pd | 4 | [10.1016/0014-5793(90)80095-z](https://doi.org/10.1016/0014-5793(90)80095-z) | [1688811](https://www.ncbi.nlm.nih.gov/pubmed/1688811) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-28T02:07:04.924924+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2023 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside on plant physiology (maize) under nickel stress, not human pharmacogenomics or PK/PD parameters. |
| popPK | Adefegha_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of spice extracts where sodium nitroprusside is used only as a reagent to induce lipid peroxidation, not as the subject drug for pharmacokinetic analysis. |
| PD | Adefegha_2012 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of spice extracts on enzymes and lipid peroxidation, using sodium nitroprusside only as a reagent to induce peroxidation, not as the drug of interest for a PD analysis. |
| popPK | Agalakova_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of preeclampsia where nitroprusside is used only as a vasorelaxant probe, not as the subject drug for pharmacokinetic analysis. |
| popPK | Agalakova_2024 | irrelevant | 0 | 0 | The study uses sodium nitroprusside as a pharmacological tool to test vascular relaxation in aortic rings, not as the subject of a pharmacokinetic analysis. |
| PGx | Akarid_1995 | not_relevant | 0 | 0 | The paper investigates the antiviral mechanism of nitric oxide donors (including nitroprusside) on a retrovirus, not the pharmacokinetics or pharmacodynamics of nitroprusside itself, nor any genetic influence on these parameters. |
| popPK | Akdag_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation where nitroprusside is used as a non-selective NO donor comparator, not a PK study. |
| PD | Akdag_2016 | not_relevant | 0 | 0 | The paper investigates the effect of rosiglitazone on vascular relaxation, using sodium nitroprusside (SNP) only as a non-specific endothelium-independent control, and does not report a pharmacodynamic or exposure-response relationship for nitroprusside itself. |
| popPK | Akomolafe_2013 | irrelevant | 0 | 0 | The study is an in-vitro antioxidant investigation where sodium nitroprusside is used as an oxidative stress inducer, not as the subject drug for pharmacokinetic analysis. |
| PGx | Alberto-Silva_2026 | not_relevant | 0 | 0 | The paper investigates the toxicological effects of sodium nitroprusside in cell lines and zebrafish, not the impact of genetic variants on its pharmacokinetics or pharmacodynamics. |
| PGx | Alp_2022 | not_relevant | 0 | 0 | The paper studies the physiological effects of sodium nitroprusside on barley plants under cadmium stress, not human pharmacogenomics. |
| popPK | Arishe_2019 | irrelevant | 0 | 0 | The study is a mechanistic vascular reactivity experiment using sodium nitroprusside as a non-selective NO donor/comparator, not a pharmacokinetic study of nitroprusside disposition. |
| popPK | Artemieva_2026 | irrelevant | 0 | 0 | The study investigates the physiological effects of molecular hydrogen on baroreflex and vascular reactivity, using nitroprusside only as a pharmacological tool to induce hypotension, and does not report any pharmacokinetic parameters for nitroprusside. |
| PD | Artemieva_2026 | not_relevant | 2 | 1 | The paper reports a single-dose hemodynamic response (HR change) to nitroprusside and in vitro dose-response data for phenylephrine, but does not provide a concentration-effect or dose-response curve or numeric PD parameters (e.g., EC50, Emax) for nitroprusside itself. |
| popPK | Barrett_2015 | relevant | 9 | 4 | The paper reports a population K-PD model for nitroprusside with specific parameters like effect compartment half-life (13.4 min) and nominal volume (1 L/70 kg), but the primary quantitative clearance (CL) and EC50 values are located in Table 2, which is not included in the provided evidence. |
| popPK | Bassiouni_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of erectile function where nitroprusside is used only as a non-selective NO donor control agent, not as the subject of pharmacokinetic analysis. |
| popPK | Beanlands_1995 | irrelevant | 0 | 0 | The study focuses on myocardial oxygen consumption using 11C acetate PET, with nitroprusside serving only as a hemodynamic intervention rather than the subject of pharmacokinetic analysis. |
| PGx | Blau_1992 | not_relevant | 0 | 0 | The study compares the clinical efficacy of esmolol and sodium nitroprusside in a general population without analyzing any gene variants or pharmacogenomic factors. |
| PGx | Bloor_1985 | not_relevant | 0 | 0 | The study compares the hemodynamic effects of sodium nitroprusside and ATP in dogs but does not investigate any gene variants or pharmacogenomic factors. |
| popPK | Bobier_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation in placental veins, not a pharmacokinetic study reporting disposition parameters for nitroprusside. |
| popPK | Brosnihan_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of Angiotensin-(1-7) in coronary arteries, using nitroprusside only as a negative control for vasodilation, and reports no pharmacokinetic parameters for nitroprusside. |
| PD | Brosnihan_1998 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of Angiotensin-(1-7); sodium nitroprusside is only mentioned as a negative control for specificity and no PD parameters for nitroprusside are reported. |
| popPK | Bruning_1995 | irrelevant | 0 | 0 | The study investigates muscarinic receptor subtypes and vasodilation, using nitroprusside only as a non-specific endothelium-independent control agent rather than as the subject of pharmacokinetic analysis. |
| popPK | Bundschuh_1995 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay using nitroprusside as a toxicant, not a pharmacokinetic study reporting disposition parameters. |
| PD | Buylaert_1989 | not_relevant | 1 | 0 | The text is a review focusing on pharmacokinetic changes during cardiopulmonary bypass and explicitly states that more data are awaited on pharmacodynamic consequences, providing no numeric PD parameters. |
| popPK | Calmasini_2015 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of prostate smooth muscle contractions where sodium nitroprusside is used only as a nitric oxide donor probe, not as the subject drug for pharmacokinetic analysis. |
| PD | Calmasini_2015 | not_relevant | 3 | 2 | The paper reports qualitative changes in relaxation to sodium nitroprusside (unaltered) and Emax values for contractile agonists, but does not provide a specific exposure-response or dose-response curve with numeric PD parameters (like EC50) for nitroprusside itself. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not nitroprusside. |
| PD | Camargo_2025 | not_relevant | 0 | 0 | The paper studies linalool, not nitroprusside. |
| PD | Cao_2022 | not_relevant | 0 | 0 | The paper uses sodium nitroprusside (SNP) as a chemical inducer of oxidative stress in a cell model to test antioxidant peptides, not as a drug for pharmacodynamic analysis; no exposure-response or dose-response relationship for nitroprusside is reported. |
| popPK | Carnaval_2025 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for schizophrenia, not a pharmacokinetic study, and contains no disposition parameters for nitroprusside. |
| PD | Carnaval_2025 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (PANSS scores) and does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for nitroprusside. |
| popPK | Cerqueira_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle relaxation where nitroprusside serves only as a comparator, with no pharmacokinetic parameters reported. |
| popPK | Chatturong_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of PDE5 inhibitors in isolated rat arteries, using nitroprusside only as a co-administered agent to test mechanism, with no PK parameters reported. |
| popPK | Chen_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxicity and does not report pharmacokinetic parameters for nitroprusside. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | The study investigates the toxicological effects of nitrate and sodium nitroprusside on amphibian embryos, not the pharmacogenomics of drug metabolism or response in humans. |
| PGx | Cherian_2026 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside as a nitric oxide donor on plant physiology and cadmium uptake, not human pharmacokinetics or pharmacodynamics. |
| popPK | Chinnathambi_2013 | irrelevant | 0 | 0 | The study investigates vascular reactivity and hypertension in rats, using nitroprusside only as a non-specific vasodilator probe rather than as the subject of pharmacokinetic analysis. |
| PD | Chinnathambi_2013 | not_relevant | 0 | 0 | The paper reports that relaxation to sodium nitroprusside was unaffected by testosterone treatment, but it does not provide numeric PD parameters (e.g., EC50, Emax) for nitroprusside, only qualitative confirmation of no change. |
| popPK | Chinnathambi_2014 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| PD | Chinnathambi_2014 | not_relevant | 0 | 0 | The paper focuses on the effects of testosterone on angiotensin II sensitivity and endothelium-dependent vasodilation in rat uterine arteries, with no mention of nitroprusside or its pharmacodynamic parameters. |
| popPK | Cho_2021 | irrelevant | 0 | 0 | The study is a mechanistic investigation of pulmonary artery contraction signaling where sodium nitroprusside is used only as a pharmacological NO donor, not as the subject of pharmacokinetic analysis. |
| popPK | Christodoulou_2025 | irrelevant | 0 | 0 | The paper is a review on hemp oils and cancer prevention, with no mention of nitroprusside or its pharmacokinetic parameters. |
| PD | Christodoulou_2025 | not_relevant | 0 | 0 | The paper is a review on hemp oils and cancer prevention, containing no data, analysis, or mention of nitroprusside or its pharmacodynamics. |
| PGx | Colley_1984 | not_relevant | 0 | 0 | The study investigates regional blood flow in dogs using nitroprusside but does not report any pharmacogenomic effects or gene variant analyses. |
| PGx | Cui_2026 | not_relevant | 0 | 0 | The paper describes a nanomedicine platform using sodium nitroprusside for wound healing and does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Cupitra_2020 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Cupitra_2020 | not_relevant | 0 | 0 | The paper focuses on the influence of aging on vascular reactivity and receptor expression in rabbit aorta, with no mention of nitroprusside or any drug exposure-response relationship. |
| PGx | Cupitra_2020 | not_relevant | 0 | 0 | The paper investigates the influence of aging on vascular reactivity in rabbit aorta and does not report pharmacogenomic effects on nitroprusside PK/PD parameters. |
| popPK | Cybularz_2017 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Cybularz_2017 | not_relevant | 0 | 0 | The paper focuses on endothelial function and gene expression in perivascular adipose tissue and does not report any pharmacodynamic or exposure-response analysis for nitroprusside. |
| popPK | Dahan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ketamine and its metabolites, with nitroprusside serving only as a co-administered nitric oxide donor to test for interactions, not as the subject drug for PK parameter estimation. |
| PD | Dash_2019 | not_relevant | 0 | 0 | The paper reports concentration-response data for sodium nitroprusside (SNP) but explicitly states "No significant changes seen," providing no numeric PD parameters (Emax, EC50) or extractable curve data for the drug in question. |
| PGx | DellOmo_2014 | not_relevant | 0 | 0 | The paper investigates the association between the PON1 Q192R polymorphism and endothelial function/insulin sensitivity, using nitroprusside only as a non-specific control for vasodilation, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Demirci_2013 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Demirci_2013 | not_relevant | 0 | 0 | The paper investigates the effect of silymarin on vascular function in aged rats, not the pharmacodynamics of nitroprusside itself. |
| PD | Discigil_2008 | not_relevant | 0 | 0 | The paper investigates the effects of high-frequency ultrasonic waves on coronary arteries and does not involve nitroprusside or any pharmacodynamic modeling. |
| popPK | Dos-Santos_2025 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of ketamine in rats and does not involve nitroprusside or report any pharmacokinetic parameters. |
| PD | Dos-Santos_2025 | not_relevant | 0 | 0 | The paper studies the cardiovascular effects of chronic ketamine use and the protective effect of exercise in rats; it does not involve nitroprusside or report any pharmacodynamic or exposure-response parameters. |
| popPK | Dua_2010 | irrelevant | 2 | 0 | The paper focuses on control theory and simulation for drug delivery, using nitroprusside as one of three agents in a model, but does not report original quantitative pharmacokinetic parameter values for nitroprusside. |
| popPK | Díaz-Peña_2023 | irrelevant | 0 | 0 | The paper investigates the mechanism of tarantula venom peptides on rat aorta and does not involve nitroprusside or pharmacokinetic parameters. |
| PD | Díaz-Peña_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a tarantula venom peptide (PrFr-I) on rat aorta and does not involve nitroprusside or report any pharmacodynamic parameters for it. |
| PGx | Elzubeir_1988 | not_relevant | 0 | 0 | The paper studies cyanide toxicity in animals using sodium nitroprusside as a source and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Emamverdian_2023 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside on plant physiology (bamboo) under heavy metal toxicity, not human pharmacogenomics or PK/PD parameters. |
| popPK | Fabiyi_2026 | irrelevant | 0 | 0 | The paper is a review of Dihydromyricetin (DHM) and does not study nitroprusside or report any pharmacokinetic parameters for it. |
| PD | Fabiyi_2026 | not_relevant | 0 | 0 | The paper is a review of Dihydromyricetin (DHM) and does not contain any data, analysis, or mention of nitroprusside or its pharmacodynamic parameters. |
| PGx | Fang_2020 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside as a signaling molecule on plant growth in contaminated soil, not human pharmacogenomics. |
| PGx | Fatma_2023 | not_relevant | 0 | 0 | The paper studies the effect of nitric oxide (SNP) on plant physiology (photosynthesis) in wheat, not human pharmacogenomics. |
| popPK | Fedorova_2015 | irrelevant | 0 | 0 | The study investigates vascular fibrosis and uses sodium nitroprusside only as a vasorelaxant probe in ex vivo experiments, not as the subject of pharmacokinetic analysis. |
| PD | Fedorova_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of spironolactone/canrenone on vascular fibrosis and MBG effects; sodium nitroprusside is used only as a vasorelaxant tool in the experimental setup, not as the subject of a PD or exposure-response analysis. |
| popPK | Fedorova_2019 | irrelevant | 0 | 0 | The study uses sodium nitroprusside as a vasorelaxant agent to assess aortic sensitivity (pharmacodynamics) rather than measuring its pharmacokinetic disposition parameters. |
| PGx | Friederich_1995 | not_relevant | 0 | 0 | The text is a general clinical review of sodium nitroprusside usage and safety, containing no information on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Gasco_1998 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in vivo vasodilating activity of new furoxancarbonitriles, using nitroprusside only as a reference comparator without reporting its pharmacokinetic parameters. |
| PGx | Giles_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of a new NO donor (tDodSNO) compared to nitroprusside in rats, but does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Goh_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of ciliary muscle relaxation in cats where nitroprusside is used only as a nitric oxide donor/comparator, with no pharmacokinetic parameters reported. |
| PGx | Grimmett_2025 | not_relevant | 0 | 0 | The paper discusses the role of SCoR2 in myocardial infarction and notes that nitroprusside lacks cardioprotective effects, but it does not report any pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of nitroprusside. |
| PGx | Grimmett_2025_2 | not_relevant | 0 | 0 | The paper investigates the role of the SCoR2 gene in myocardial infarction and metabolic reprogramming, mentioning nitroprusside only as a clinical comparator for NO signaling, without reporting any pharmacokinetic or pharmacodynamic parameters of nitroprusside. |
| popPK | Grände_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilator responses in isolated arteries, not a pharmacokinetic study, and reports no disposition parameters for nitroprusside. |
| popPK | Gu_1994 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of enzyme activity modulation, not a pharmacokinetic study, and reports no disposition parameters for nitroprusside. |
| popPK | Guers_2017 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Guers_2017 | not_relevant | 0 | 0 | The paper focuses on parathyroid hormone in rats and does not mention nitroprusside or report any exposure-response or dose-response data for it. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates neuroprotection in Parkinsonian rats using rosiglitazone and tramadol, with no mention of nitroprusside or pharmacokinetic parameters. |
| PD | Hadi_2025 | not_relevant | 0 | 0 | The paper investigates rosiglitazone and tramadol, not nitroprusside, and does not report any pharmacodynamic or exposure-response relationship for nitroprusside. |
| PGx | Hamidizad_2025 | not_relevant | 0 | 0 | The study is an animal model investigating the neuroprotective mechanism of sodium nitroprusside in CKD, not a pharmacogenomic analysis of human PK/PD parameters. |
| popPK | Hammer_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fenoldopam, not nitroprusside, which is only mentioned as a comparator agent in the introduction. |
| PGx | Hamurcu_2020 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside as a nitric oxide donor on watermelon plants under drought stress, not human pharmacogenomics. |
| popPK | Hassanain_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of clevidipine using nitroprusside only as a comparator, reporting EC50 values rather than pharmacokinetic parameters. |
| popPK | Hausdorf_1984 | irrelevant | 1 | 0 | The study investigates hemodynamic effects (resistance/capacitance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for nitroprusside. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not report quantitative pharmacokinetic parameters for nitroprusside. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies and PK in obese pediatric patients and does not report any pharmacodynamic or exposure-response data for nitroprusside. |
| PGx | Hewick_1987 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (nitroprusside with hydroxocobalamin/thiosulphate) in rats, not pharmacogenomic effects of gene variants. |
| PD | Hirschl_1995 | not_relevant | 1 | 0 | The text is a general clinical guideline discussing the use of sodium nitroprusside for hypertensive crises but does not provide any specific numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data. |
| PGx | Huang_2021 | not_relevant | 0 | 0 | The paper investigates the protective effect of S-Equol against sodium nitroprusside-induced damage in chondrocytes and does not report any pharmacogenomic effects on the PK or PD of nitroprusside. |
| popPK | Ijioma_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of smooth muscle relaxation and cGMP accumulation, not a pharmacokinetic study, and reports no disposition parameters for nitroprusside. |
| PGx | Isidoro-García_2021 | not_relevant | 0 | 0 | The study investigates the effect of androgens on vascular function and neurotransmitter release in rats, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of nitroprusside. |
| PGx | Izumi_1993 | not_relevant | 0 | 0 | The paper investigates the neurotoxic mechanism of sodium nitroprusside in rat hippocampal slices and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Jalnapurkar_2019 | not_relevant | 0 | 0 | The paper investigates the effect of nitroprusside on mesenchymal stromal cells to enhance stem cell engraftment, not the pharmacokinetics or pharmacodynamics of nitroprusside itself in relation to genetic variants. |
| popPK | Kamp_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketamine and its metabolites, with nitroprusside serving only as a co-administered agent to reduce side effects, not as the subject drug. |
| PD | Kamp_2020 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic modeling of ketamine and its metabolites; it does not report any pharmacodynamic or exposure-response analysis for nitroprusside. |
| PGx | Kamp_2020 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of ketamine and its metabolites, not nitroprusside, and does not investigate gene variants. |
| popPK | Kamp_2021 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Kamp_2021 | not_relevant | 0 | 0 | The paper focuses on ketamine, not nitroprusside. |
| PD | Kao_2023 | not_relevant | 4 | 2 | The paper focuses on a mathematical model for phenylephrine (vasopressor) therapy, using nitroprusside only to induce shock; it does not report a PD model or numeric PD parameters for nitroprusside itself. |
| PGx | Kao_2023 | not_relevant | 0 | 0 | The paper describes a mathematical model for vasoplegic shock and vasopressor therapy in pigs and does not report any pharmacogenomic effects or gene variants. |
| PGx | Karahan_2025 | not_relevant | 0 | 0 | The paper focuses on control theory for automated drug infusion and does not report any pharmacogenomic effects or gene variants. |
| PGx | Karam_1984 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of sodium nitroprusside in hypothermic surgery but contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| PGx | Kawase_2020 | not_relevant | 0 | 0 | The paper investigates the effect of inflammation and cytokines on efflux transporters, using sodium nitroprusside only as a non-specific nitric oxide donor for cell treatment, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Kaya_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and chromium toxicity in tomatoes, not human pharmacogenomics or nitroprusside PK/PD. |
| popPK | Khalili_2020 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| PD | Khalili_2020 | not_relevant | 0 | 0 | The paper investigates Vitamin C formulations in rats and does not mention nitroprusside or report any pharmacodynamic parameters for it. |
| popPK | Khammy_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of vascular reactivity, not a pharmacokinetic study, and reports no disposition parameters for nitroprusside. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study is a genetic analysis of vascular reactivity (pharmacodynamics) in mice, not a pharmacokinetic study, and reports no disposition parameters for nitroprusside. |
| PGx | Kováčik_2012 | not_relevant | 0 | 0 | The paper studies aluminum toxicity in plants using sodium nitroprusside as a chemical regulator, not human pharmacogenomics. |
| PGx | Kováčik_2023 | not_relevant | 0 | 0 | The paper studies the effect of nitric oxide (donated by sodium nitroprusside) on mercury toxicity in lichens, not the pharmacokinetics or pharmacodynamics of nitroprusside in humans or animals. |
| PGx | Kumari_2025 | not_relevant | 0 | 0 | The paper studies plant physiology (cucumber seedlings) and uses sodium nitroprusside as a nitric oxide donor, not as a drug in a human pharmacogenomic context. |
| PGx | Kwon_2024 | not_relevant | 0 | 0 | The study investigates the efficacy of sodium nitroprusside in preventing pulmonary thromboembolism in mice and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Küng_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of mibefradil on coronary arteries and mentions sodium nitroprusside only as a control agent, without reporting any pharmacogenomic effects on nitroprusside. |
| popPK | Lad_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and biological activity study of Eucalyptus globulus essential oil and does not report pharmacokinetic parameters for nitroprusside. |
| PD | Lad_2026 | not_relevant | 0 | 0 | The paper studies Eucalyptus globulus essential oil, not nitroprusside, and reports in vitro phytochemical and bioactivity assays rather than pharmacodynamic modeling for the target drug. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study is a mechanistic vascular biology paper using nitroprusside only as a pharmacological tool for myography, not a pharmacokinetic study. |
| PD | Lee_2022 | not_relevant | 0 | 0 | The paper reports pharmacological responses to nitroprusside in a genetic knockout model, but does not report a PD model or exposure-response relationship for nitroprusside as a therapeutic drug. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cerebral microcirculation and oxygenation, reporting no pharmacokinetic parameters (e.g., clearance, volume, half-life) for nitroprusside. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study uses sodium nitroprusside only as a non-endothelium-dependent vasodilator control in aortic ring experiments to assess vascular function, not as a subject drug for pharmacokinetic analysis. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper uses sodium nitroprusside only as a positive control for endothelium-independent relaxation and reports no difference among groups, providing no exposure-response or dose-response PD parameters for nitroprusside. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The study focuses on endothelial dysfunction in CKD rats, using nitroprusside only as a positive control for vasodilation, and does not report any pharmacokinetic parameters for nitroprusside. |
| PD | Li_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of endothelial dysfunction in CKD using TMAO and DMB; nitroprusside is used only as a non-specific vasodilator control to confirm endothelial-independent function, with no exposure-response or dose-response analysis for nitroprusside reported. |
| PGx | Liao_2026 | not_relevant | 0 | 0 | The paper describes a nanomedicine formulation for cancer therapy and does not investigate pharmacogenomic effects on the PK or PD of nitroprusside. |
| popPK | Lovren_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation mechanisms, not a pharmacokinetic study reporting disposition parameters for nitroprusside. |
| popPK | Lucas-Herald_2024 | irrelevant | 0 | 0 | The study is an in-vitro vascular reactivity experiment where sodium nitroprusside is used as a non-selective vasodilator probe, not as the subject drug for pharmacokinetic analysis. |
| PD | Lucas-Herald_2024 | not_relevant | 0 | 0 | The paper investigates the effects of sex hormones on vascular reactivity in vitro, not the pharmacodynamics of nitroprusside itself; nitroprusside is used only as a reference agent for endothelium-independent relaxation. |
| popPK | MacRitchie_2025 | irrelevant | 0 | 0 | The study focuses on EPAC1 activators (PWO577, SY007) and uses sodium nitroprusside only as a positive control for endothelium-independent relaxation, not as the subject of pharmacokinetic analysis. |
| PD | MacRitchie_2025 | not_relevant | 0 | 0 | The paper focuses on EPAC1 activators and uses sodium nitroprusside only as a positive control for endothelium-independent relaxation, without reporting any exposure-response or dose-response analysis for nitroprusside. |
| popPK | Mace_2022 | irrelevant | 0 | 0 | The study uses sodium nitroprusside as a pharmacological tool to assess vascular reactivity (pharmacodynamics) in an ex-vivo myograph model, not to characterize its pharmacokinetic disposition parameters. |
| PGx | Marin_1995 | not_relevant | 0 | 0 | The paper investigates the mechanism of nitric oxide-induced protein modification and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nitroprusside. |
| popPK | Marley_1995 | irrelevant | 0 | 0 | The paper is a mechanistic study on tyrosine hydroxylase activation in bovine chromaffin cells, and nitroprusside is only used as a negative control agent, not as the subject of a pharmacokinetic analysis. |
| PD | Marley_1995 | not_relevant | 0 | 0 | The paper investigates the mechanism of tyrosine hydroxylase activation by PKA and nicotine; nitroprusside is only mentioned as a negative control (no effect) without any dose-response analysis or PD parameters. |
| PD | Martins_2009 | not_relevant | 0 | 0 | The paper studies synthetic pyrazoline derivatives as antioxidants; nitroprusside is used only as a chemical inducer of oxidative stress, not as the drug of interest for PD analysis. |
| popPK | Matsumoto_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxation in isolated dog coronary arteries, not a pharmacokinetic study, and nitroprusside is used only as a comparator agent. |
| popPK | Medhora_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lisinopril, not nitroprusside (which is only mentioned as a reagent in a BUN assay). |
| PD | Medhora_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic (PK) model for lisinopril but does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it provide numeric PD parameters. |
| PGx | Mei_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of action of an enkephalinase inhibitor in a migraine model and does not report any pharmacogenomic effects on the PK or PD of nitroprusside. |
| popPK | Meijer_2020 | irrelevant | 0 | 0 | The study focuses on fentanyl dosing and postoperative pain, with no mention of nitroprusside or its pharmacokinetic parameters. |
| PD | Meijer_2020 | not_relevant | 0 | 0 | The paper is a clinical trial regarding fentanyl dosing strategies and does not involve nitroprusside or report any pharmacodynamic or exposure-response modeling. |
| popPK | Merkel_1992 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Merkel_1992 | not_relevant | 0 | 0 | The paper focuses on vasoactive peptides in aortic rings from rabbits and does not mention nitroprusside or report any exposure-response or dose-response data for it. |
| PD | Mesh_1991 | not_relevant | 1 | 0 | The paper focuses on vasopressin dose-response; nitroprusside is only mentioned qualitatively as an equipotent vasodilator without specific numeric PD parameters or concentration-effect data. |
| popPK | Metzler-Wilson_2013 | irrelevant | 0 | 0 | Sodium nitroprusside is used only as a pharmacological probe for vasodilation, not as the subject drug for pharmacokinetic analysis. |
| PD | Metzler-Wilson_2013 | not_relevant | 0 | 0 | The paper investigates the effect of topical anesthesia on skin responses, not the pharmacodynamics of nitroprusside itself; nitroprusside is used only as a tool to test vascular reactivity, and no dose-response curve or PD parameters for nitroprusside are reported. |
| PGx | Mishra_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and ozone stress in wheat, not human pharmacogenomics or PK/PD parameters of nitroprusside. |
| popPK | Mohammed_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxation using sodium nitroprusside as a NO donor, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mokotedi_2019 | irrelevant | 0 | 0 | The study uses sodium nitroprusside as a non-selective vasodilator probe to assess vascular reactivity in an arthritis model, not as a subject drug for pharmacokinetic analysis. |
| PD | Mokotedi_2019 | not_relevant | 0 | 0 | The paper investigates inflammatory markers and endothelial dysfunction in a disease model; sodium nitroprusside is used only as a non-specific vasodilator control, and no exposure-response or dose-response relationship for nitroprusside is modeled or reported. |
| popPK | Monge_2017 | irrelevant | 0 | 0 | The study uses nitroprusside as a pharmacological tool to alter arterial load in a hemodynamic study, not to characterize its pharmacokinetic parameters. |
| PGx | Moraes_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a novel NO donor (NONO2P) in rat mesenteric arteries and does not report any pharmacogenomic effects (gene variants) on the PK or PD of nitroprusside. |
| popPK | Morris_2007 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| PD | Morris_2007 | not_relevant | 0 | 0 | The text describes a cardiopulmonary bypass simulation system and does not contain any pharmacodynamic or exposure-response data for nitroprusside. |
| popPK | Morris_2024 | irrelevant | 0 | 0 | The paper describes a mechanistic hemodynamic model for rats and dogs and does not report pharmacokinetic parameters for nitroprusside. |
| PD | Morris_2024 | not_relevant | 0 | 0 | The paper develops a mechanistic physiological model of hemodynamics in rats and dogs; nitroprusside is mentioned only as a tool used in cited literature to induce pressure changes for model calibration, and no specific pharmacodynamic parameters (e.g., EC50, Emax) for nitroprusside are reported or derived. |
| popPK | Muir_2026 | irrelevant | 0 | 0 | The paper is a review of fluid dynamics and IV fluid therapy physiology, and does not report pharmacokinetic parameters for nitroprusside. |
| PD | Muir_2026 | not_relevant | 0 | 0 | The paper is a review of fluid physiology and volume kinetics, containing no pharmacodynamic or exposure-response analysis for nitroprusside. |
| PGx | Nabaei_2024 | not_relevant | 0 | 0 | The paper studies plant physiology and alkaloid biosynthesis in Catharanthus roseus, not human pharmacogenomics or PK/PD parameters. |
| PGx | Nand_1995 | not_relevant | 0 | 0 | The paper investigates the effect of sodium nitroprusside on peritoneal dialysis efficacy in a general population, with no mention of gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Neto_2025 | irrelevant | 0 | 0 | The study is a mechanistic vascular physiology investigation using nitroprusside as a pharmacological tool to assess sGC function, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Neutel_1994 | not_relevant | 0 | 0 | The study compares the efficacy of two drugs in a general population and does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and mentions nitroprusside only as a class example of NO donors, without reporting any pharmacokinetic parameters. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension in Ethiopia and does not contain any pharmacodynamic or exposure-response analysis for nitroprusside. |
| popPK | Oboh_2015 | irrelevant | 0 | 0 | The paper is an in-vitro study on clove bud essential oil where sodium nitroprusside is used only as a reagent to induce oxidative stress, not as the subject drug for pharmacokinetic analysis. |
| PD | Oboh_2015 | not_relevant | 0 | 0 | The paper investigates the in vitro enzyme inhibition of clove bud essential oil, not the pharmacodynamics of nitroprusside. |
| popPK | Pagani_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitroglycerin tolerance where nitroprusside is only used as a comparator for cross-tolerance, with no pharmacokinetic parameters reported. |
| popPK | Panklai_2024 | irrelevant | 0 | 0 | The study investigates the vasorelaxant effects of Nymphaea pubescens extract, using sodium nitroprusside only as a mechanistic tool (NO donor) rather than as the subject drug for pharmacokinetic analysis. |
| PD | Panklai_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Nymphaea pubescens extract and quercetin 3-methyl ether 3′-O-β-xylopyranoside, not nitroprusside (which is used only as a positive control). |
| PGx | Park_2023 | not_relevant | 0 | 0 | The paper investigates the in vitro antimicrobial efficacy of nitroprusside against Acanthamoeba and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Patel_1986 | not_relevant | 0 | 0 | The paper reports clinical toxicity and tachyphylaxis in post-CABG patients but does not investigate or report any gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| PGx | Piacentini_2020 | not_relevant | 0 | 0 | The paper studies the interaction between nitric oxide and auxin in rice plants under heavy metal stress, not human pharmacogenomics. |
| PGx | Pirooz_2021 | not_relevant | 0 | 0 | The paper investigates plant physiology (Salvia officianis) and uses sodium nitroprusside as a nitric oxide donor, not as a drug for human pharmacogenomics. |
| PGx | Pirooz_2023 | not_relevant | 0 | 0 | The paper studies plant physiology (copper toxicity in Salvia officinalis) and does not involve human pharmacogenomics or PK/PD parameters. |
| PGx | Polverari_2003 | not_relevant | 0 | 0 | The paper studies transcriptional changes in Arabidopsis thaliana (a plant) induced by sodium nitroprusside, not human pharmacogenomics or PK/PD parameters. |
| PD | Post_1998 | not_relevant | 1 | 0 | The text is a qualitative review of fenoldopam that mentions nitroprusside only for comparison, without providing any numeric PD parameters or exposure-response data for nitroprusside. |
| PGx | Przybylo_1995 | not_relevant | 0 | 0 | The study investigates sodium nitroprusside metabolism in children but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Rahim_2022 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside on rice plants exposed to lead stress, not human pharmacogenomics or PK/PD parameters. |
| PGx | Rahman_2024 | not_relevant | 0 | 0 | The paper investigates the efficacy of migraine blockers on motion sickness induced by nitroprusside, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of nitroprusside. |
| popPK | Ran_2014 | irrelevant | 0 | 0 | The study investigates the effects of bFGF on vascular restenosis and uses sodium nitroprusside only as a pharmacological tool for in-vitro vasorelaxation assays, not as a subject for pharmacokinetic analysis. |
| PD | Ran_2014 | not_relevant | 0 | 0 | The study reports maximal relaxation effects (Emax) of nitroprusside as a positive control for vascular reactivity, but does not provide concentration-response data, EC50/IC50 values, or any exposure-response relationship for nitroprusside. |
| PGx | Recchioni_2026 | not_relevant | 0 | 0 | The paper is a systematic review of clinical applications and safety of sodium nitroprusside, with no mention of pharmacogenomics or gene variants affecting PK/PD. |
| PGx | Richardson_1995 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of nitroprusside (NO release) on iron uptake in cancer cells, not the effect of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Rodriguez-Pascual_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of the NO:cGMP pathway in bovine chromaffin cells, not a pharmacokinetic study, and nitroprusside is used only as a stimulant agent. |
| PD | Rodriguez-Pascual_1995 | not_relevant | 1 | 0 | The paper reports a single fixed concentration (100 microM) of sodium nitroprusside (SNP) to demonstrate cGMP production and subsequent inhibition by calcium, but does not provide a dose-response curve or numeric PD parameters (like EC50 or Emax) for nitroprusside itself. |
| PGx | Rosselli_1995 | not_relevant | 0 | 0 | The paper investigates the direct toxicological effects of nitric oxide donors on sperm motility and viability, not the pharmacokinetics or pharmacodynamics of nitroprusside in the context of gene variants. |
| PGx | Saha_2022 | not_relevant | 0 | 0 | The paper studies the physiological effects of sodium nitroprusside (SNP) as a nitric oxide donor in rice plants under salt stress, not the pharmacokinetics or pharmacodynamics of nitroprusside in humans based on genetic variants. |
| PGx | Schröder_1988 | not_relevant | 0 | 0 | The study investigates cellular tolerance to nitrovasodilators in rat fibroblasts and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Serpa_2014 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Serpa_2014 | not_relevant | 0 | 0 | The paper focuses on the modulation of cGMP by adenosine A1 receptors and does not mention nitroprusside or report any exposure-response or dose-response relationships for it. |
| PGx | Sharma_2023 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside as a nitric oxide donor on plant stress, not human pharmacogenomics. |
| PGx | Silva_2019 | not_relevant | 0 | 0 | The paper describes a novel drug delivery system (silica nanoparticles) for nitroprusside and does not investigate any gene variants or pharmacogenomic effects. |
| PGx | Simfukwe_2025 | not_relevant | 0 | 0 | The study investigates the vasodilatory effects of a plant extract on rat aortic rings and does not report any pharmacogenomic effects on the PK or PD parameters of nitroprusside. |
| PGx | Singh_2023 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside on plant physiology (Sorghum) and does not involve human pharmacogenomics or PK/PD parameters. |
| PGx | Sita_2021 | not_relevant | 0 | 0 | The paper studies the physiological effects of sodium nitroprusside on lentil plants, not human pharmacogenomics. |
| PGx | Soares_2021 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside on tomato plants, not human pharmacogenomics. |
| PGx | Souri_2021 | not_relevant | 0 | 0 | The paper investigates the physiological effects of sodium nitroprusside on plants under cadmium stress, not human pharmacogenomics. |
| PD | Southam_1991 | not_relevant | 0 | 0 | The paper studies the intercellular action of nitric oxide in cerebellar slices, not the pharmacodynamics of the drug nitroprusside. |
| popPK | Spencer_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment on mouse colon where nitroprusside is used only as a repolarizing agent, not as the subject drug for PK analysis. |
| popPK | Subramanian_2014 | irrelevant | 0 | 0 | The study is a mechanistic vascular function assay in rats where nitroprusside is used only as a comparator vasodilator, not as the subject drug for pharmacokinetic analysis. |
| PD | Subramanian_2014 | not_relevant | 0 | 0 | The paper reports that sodium nitroprusside had no effect, but provides no numeric PD parameters (e.g., EC50, Emax) or concentration-response data for nitroprusside. |
| PD | Sukumaran_2013 | not_relevant | 0 | 0 | The study investigates the mechanism of TRPV4-mediated relaxation using a TRPV4 agonist (GSK1016790A) and mentions nitroprusside (SNP) only as a positive control for endothelium-independent relaxation, without reporting any exposure-response or dose-response parameters for nitroprusside itself. |
| popPK | Suzuki_1995 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Suzuki_1995 | not_relevant | 0 | 0 | The paper investigates the vasodilator response to histamine, not nitroprusside, and does not report any exposure-response or dose-response relationship for nitroprusside. |
| popPK | Sybertz_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of atrial natriuretic factor in rabbit aorta, using nitroprusside only as a comparator agent without reporting any pharmacokinetic parameters. |
| PD | Sybertz_1985 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of atrial natriuretic factor (ANF); nitroprusside is only mentioned as a positive control for ouabain sensitivity, with no specific PD parameters or dose-response data reported for it. |
| PGx | Taj_2024 | not_relevant | 0 | 0 | The paper studies the effects of sodium nitroprusside (SNP) on spinach plants under cadmium stress, not the pharmacokinetics or pharmacodynamics of nitroprusside in humans or animals. |
| PGx | Tarhan_2006 | not_relevant | 0 | 0 | The paper compares the efficacy and side effects of sodium nitroprusside and papaverine/phentolamine in erectile dysfunction but does not report any pharmacogenomic effects or gene variant analyses. |
| PGx | Tod_1995 | not_relevant | 0 | 0 | The paper investigates the physiological sites of action of inhaled NO and sodium nitroprusside in lamb lungs, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Tovchiga_2025 | irrelevant | 0 | 0 | The paper is a review on uric acid and Alzheimer's disease, with no mention of nitroprusside or pharmacokinetic parameters. |
| PD | Tovchiga_2025 | not_relevant | 0 | 0 | The paper is a review on uric acid and Alzheimer's disease and does not contain any pharmacodynamic or exposure-response data for nitroprusside. |
| popPK | Tucker_2017 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Tucker_2017 | not_relevant | 0 | 0 | The paper investigates the physiological effects of hypohydration on vasodilation and sweating, not the pharmacodynamics of nitroprusside. |
| popPK | Tulbah_2026 | irrelevant | 0 | 0 | The paper is a review of PKPD models for anesthetic agents (propofol, remifentanil, etc.) and does not contain any data or parameters for nitroprusside. |
| PD | Tulbah_2026 | not_relevant | 1 | 0 | The paper is a review of anesthesia PK/PD modeling (propofol, remifentanil, etc.) and does not contain any data, analysis, or parameters for nitroprusside. |
| popPK | Turner_1995 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Turner_1995 | not_relevant | 0 | 0 | The paper investigates the effects of genetic hyperinsulinemia in Zucker rats and does not mention nitroprusside or report any drug exposure-response or dose-response relationships. |
| PD | Vizir_2006 | not_relevant | 1 | 0 | The text describes qualitative hemodynamic and metabolic effects of buccal nitroprusside but does not report any numeric concentration-effect or dose-response parameters. |
| popPK | Wang_1999 | irrelevant | 1 | 0 | The study focuses on vascular capacitance and volume changes (hemodynamics) rather than pharmacokinetic disposition parameters like clearance or half-life. |
| PD | Wang_2010 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Ginsenoside Rg1, not nitroprusside; nitroprusside is used only as a fixed-concentration NO donor in in vitro experiments. |
| PGx | Wani_2023 | not_relevant | 0 | 0 | The paper studies the effect of a nitric oxide donor on plant physiology under cadmium stress, not human pharmacogenomics. |
| PD | Weissman_1990 | not_relevant | 0 | 0 | The paper focuses on the interaction between nitrogen oxide compounds and peripheral benzodiazepine receptors, not on the pharmacodynamic or exposure-response relationship of nitroprusside. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not contain any pharmacokinetic data for nitroprusside. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for nitroprusside. |
| PD | Wisutthathum_2018 | not_relevant | 0 | 0 | The paper reports PD parameters for Eulophia macrobulbon extract, not nitroprusside; nitroprusside is only used as a positive control. |
| PGx | Woodside_1984 | not_relevant | 0 | 0 | The study investigates the effect of a drug (captopril) on nitroprusside requirements, not the effect of a gene variant or genotype. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine (Danhong formula) and does not report pharmacogenomic effects on the PK or PD of nitroprusside. |
| PGx | Zago_2006 | not_relevant | 0 | 0 | The paper studies plant biology (tobacco) and gene expression, not human pharmacogenomics or PK/PD parameters. |
| PGx | Zare_2023 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside as a nitric oxide donor on cadmium toxicity in corn plants, not the pharmacokinetics or pharmacodynamics of nitroprusside in humans or the influence of genetic variants on its response. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates the effect of sodium nitroprusside on ginseng plant quality and does not report any pharmacogenomic effects on human PK/PD parameters. |
| PGx | Zheng_2026 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting cyanide residues in sodium nitroprusside and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Zorrilla_2025 | not_relevant | 0 | 0 | The paper investigates the efficacy of cannabinoids in treating migraine-like symptoms in mice using SNP as a trigger, but does not report pharmacogenomic effects on the PK or PD parameters of nitroprusside itself. |
| popPK | de_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for hydroxocobalamin, not nitroprusside. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
