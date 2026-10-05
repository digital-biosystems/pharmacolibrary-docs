<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;lactulose&quot;}]"></div>

# lactulose

- **generic name:** lactulose
- **ATC codes:** `A06AD11`
- **DrugBank:** [DB00581](https://go.drugbank.com/drugs/DB00581) · **PubChem:** [CID 11333](https://pubchem.ncbi.nlm.nih.gov/compound/11333)
- **molar mass:** 342.2965 g/mol (C12H22O11) — DrugBank
- **groups:** approved, investigational

## About

Lactulose is a disaccharide laxative used to treat constipation and, in higher doses, hepatic encephalopathy and hepatic coma. It is widely used and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422689](https://www.wikidata.org/wiki/Q422689) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:03 | 7:03 | 0/0/0 | 0/0/1 | 0/0/0 | 265,202/5,694 | ollama / qwen3.8:27b-mtp-q8_0 | 33 | 10/32 | 33/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Oku_1998_diarrhea](drugs/drug_lactulose/pd_Oku_1998_diarrhea.md) | diarrhea ← lactulose · direct linear effect | — | Oku T et al., Transitory laxative threshold of trehal…, Journal of nutritional scie… (1998) | [10.3177/jnsv.44.787](https://doi.org/10.3177/jnsv.44.787) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lactulose) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 214 matched, 125 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adams_2009 | not_relevant | 0 | 0 | The paper is a case report of carbamazepine-induced hyperammonemia treated with lactulose; it does not report any pharmacodynamic or exposure-response analysis for lactulose. |
| popPK | Albitar_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics/survival analysis of clozapine in schizophrenia patients and does not involve lactulose or its pharmacokinetics. |
| PD | Albitar_2021 | not_relevant | 0 | 0 | The paper analyzes the dose-response relationship for clozapine, not lactulose. |
| PGx | Baek_2011 | not_relevant | 0 | 0 | The paper reports a case of fluvastatin-induced rhabdomyolysis in a patient with liver cirrhosis and does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of lactulose. |
| PD | Baglioni_1976 | not_relevant | 0 | 0 | The provided text contains only the title and no body content, making it impossible to verify the presence of numeric PD parameters or exposure-response relationships. |
| popPK | Barone_2021 | irrelevant | 0 | 0 | The study evaluates the clinical effect of lactulose on neurological symptoms in HHT patients and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lactulose. |
| popPK | Bassi_2024 | irrelevant | 0 | 0 | The paper is a clinical case report on hyperammonemia and hypothyroidism where lactulose is used as a therapeutic agent, not a pharmacokinetic study. |
| popPK | Behrens_1986 | irrelevant | 0 | 0 | Lactulose is used only as a diagnostic marker for intestinal permeability, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Bjarnason_1996 | not_relevant | 2 | 1 | The paper uses lactulose as an internal reference marker for disaccharidase activity rather than analyzing its pharmacodynamic exposure-response relationship, and no numeric PD parameters for lactulose are reported. |
| PD | Bouhnik_2004 | not_relevant | 2 | 1 | The study reports that lactulose was not bifidogenic and found no significant dose-response relationship for the effective substrates, providing no numeric PD parameters or concentration-effect curve for lactulose. |
| popPK | Brechmann_2017 | irrelevant | 0 | 0 | The study uses lactulose as a diagnostic probe for a hydrogen breath test to identify SIBO risk factors, not as a subject drug for pharmacokinetic analysis. |
| popPK | Brill_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, not lactulose. |
| PD | Brill_2014 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for midazolam, not lactulose, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Chediack_2003 | irrelevant | 2 | 0 | Lactulose is used as a probe molecule to study paracellular transport mechanisms in sparrows, not as a subject drug for PK parameter estimation (CL, V, etc.). |
| PGx | Chojnacki_2021 | not_relevant | 0 | 0 | The study investigates the association between SIBO (diagnosed via lactulose breath test) and serotonin metabolism, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of lactulose. |
| PD | Dalal_2017 | not_relevant | 0 | 0 | The paper is a systematic review of probiotics for hepatic encephalopathy and does not report any pharmacodynamic or exposure-response analysis for lactulose. |
| PD | Di_2004 | not_relevant | 1 | 0 | The paper reports a clinical trial comparing a combination therapy (lactulose, metronidazole, GTN) to placebo, providing only qualitative pain scores and no concentration-effect or dose-response analysis for lactulose. |
| PD | Disli_2026 | not_relevant | 0 | 0 | The paper identifies lactulose as a constituent of propolis but does not report any pharmacodynamic or exposure-response analysis for lactulose itself; the reported IC50 values refer to the total propolis extracts. |
| popPK | Dupont_1989 | irrelevant | 1 | 0 | Lactulose is used as a diagnostic marker for intestinal permeability (L/M ratio), not as the subject of a pharmacokinetic study reporting disposition parameters like CL or V. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment of nickel in food and drinking water and does not involve lactulose or its pharmacokinetics. |
| PD | EFSA_2020 | not_relevant | 0 | 0 | The paper is a risk assessment for nickel exposure and does not contain any pharmacodynamic or exposure-response analysis for lactulose. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper concerns the safety re-evaluation of erythritol, not the pharmacokinetics of lactulose. |
| PD | EFSA_2023 | not_relevant | 0 | 0 | The paper is a risk assessment for erythritol (E 968), not lactulose, and does not report pharmacodynamic parameters for the target drug. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper discusses ergot alkaloids in feed and does not involve lactulose or its pharmacokinetics. |
| PD | EFSA_2024 | not_relevant | 0 | 0 | The paper is a risk assessment for ergot alkaloids in animal feed and does not contain any pharmacodynamic or exposure-response data for lactulose. |
| popPK | Efremova_2023 | irrelevant | 0 | 0 | The paper is a review of the epidemiology of small intestinal bacterial overgrowth (SIBO) where lactulose is used only as a diagnostic probe in breath tests, not as a subject drug for pharmacokinetic analysis. |
| popPK | Eldon_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of naloxegol, with lactulose used only as a marker for orocecal transit time, not as the subject drug for PK parameter estimation. |
| PD | Eldon_2015 | not_relevant | 0 | 0 | The paper studies naloxegol, not lactulose; lactulose is only mentioned as a co-administered substance in the study design. |
| popPK | Elia_1987 | irrelevant | 2 | 0 | The study uses lactulose as a diagnostic marker for intestinal permeability and reports qualitative excretion patterns/ratios rather than quantitative population pharmacokinetic parameters (CL, V, ka) for lactulose itself. |
| popPK | Elia_1987_2 | irrelevant | 1 | 0 | Lactulose is used as a diagnostic marker for intestinal permeability, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Eriksen_2023 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of ammonia (clearance and production), not lactulose, which is only used as a therapeutic intervention to reduce ammonia production. |
| popPK | Evstafeva_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 2-octynohydroxamic acid, not lactulose, which is only mentioned as a background comparator for hepatic encephalopathy treatment. |
| popPK | Fasano_2014 | irrelevant | 0 | 0 | Lactulose is used only as a diagnostic agent (breath test) for SIBO, not as the subject drug for PK analysis. |
| PD | Ford_1995 | not_relevant | 0 | 0 | The paper uses lactulose as a marker for intestinal permeability to assess NSAID toxicity, but does not report a pharmacodynamic or exposure-response relationship for lactulose itself. |
| popPK | Frontera_2014 | irrelevant | 0 | 0 | The paper is a clinical management review of hepatic encephalopathy and does not report any pharmacokinetic parameters for lactulose. |
| popPK | Gasbarrini_2007 | irrelevant | 0 | 0 | The paper is a review of SIBO diagnosis and treatment where lactulose is used only as a diagnostic probe in breath tests, not as a subject for pharmacokinetic modeling. |
| PD | Goerg_2003 | not_relevant | 0 | 0 | The paper studies peppermint and caraway oil, not lactulose; lactulose is used only as a marker for orocecal transit time. |
| popPK | Goodgame_1995 | irrelevant | 0 | 0 | Lactulose is used as a diagnostic marker for intestinal permeability, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Greger_1999 | irrelevant | 0 | 0 | The paper is a review discussing the effects of nondigestible carbohydrates (including lactulose) on mineral bioavailability, not a pharmacokinetic study of lactulose. |
| popPK | Guillé_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metronidazole in rats, with lactulose mentioned only as a background therapeutic agent for portosystemic encephalopathy. |
| popPK | Gur_2022 | irrelevant | 0 | 0 | The study is a metabolomics analysis of probiotic effects in CF patients where lactulose is detected as a urinary metabolite, not a drug subject to pharmacokinetic modeling. |
| PD | Hafkemeyer_1995 | not_relevant | 0 | 0 | The paper is a clinical case report describing the failure of lactulose to treat collagenous sprue, with no pharmacodynamic modeling, concentration-effect analysis, or numeric PD parameters reported. |
| PD | Hallmann_2000 | not_relevant | 1 | 0 | The text is a qualitative review of laxative toxicity and abuse potential, containing no quantitative pharmacodynamic or exposure-response data for lactulose. |
| popPK | Hussain_1998 | irrelevant | 0 | 0 | Lactulose is used only as a co-administered agent to modify pH for a mesalazine study, with no PK parameters reported for lactulose itself. |
| popPK | Iqbal_1995 | irrelevant | 1 | 0 | Lactulose is used as a comparator probe for intestinal permeability, not as the subject of a pharmacokinetic study, and no PK parameters are reported. |
| PD | Ito_2012 | not_relevant | 2 | 1 | The paper reports qualitative dose-response observations (lactulose vs. hydrogen water/gas) and breath hydrogen levels, but does not provide a quantitative PD model, Emax/EC50 parameters, or a numeric concentration-effect curve for the drug's therapeutic effect. |
| popPK | Ivanova_2023 | irrelevant | 0 | 0 | The study investigates the effects of CoQ10 on gut microbiome biomarkers using lactulose only as a diagnostic probe in a breath test, not as the subject drug for pharmacokinetic analysis. |
| PGx | Jia_2026 | not_relevant | 0 | 0 | The paper describes the directed evolution of an enzyme for the industrial synthesis of lactulose, not the pharmacogenomics of lactulose metabolism or response in humans. |
| PD | Kang_2025 | not_relevant | 0 | 0 | The paper focuses on the mechanism of Zhishi Decoction; lactulose is only used as a positive control in a qualitative animal study without any exposure-response or dose-response analysis or numeric PD parameters. |
| PD | Koetse_2000 | not_relevant | 1 | 0 | The study explicitly states that no dose-response relation was observed for lactulose, and the reported correlation is between two gas outputs (H2 and 13CO2), not a drug concentration-effect relationship. |
| popPK | Kokubo_2013 | irrelevant | 0 | 0 | The study uses lactulose as a marker to measure oro-cecal transit time, not to characterize the pharmacokinetic parameters (CL, V, etc.) of lactulose itself. |
| popPK | Kordzaya_2000 | irrelevant | 0 | 0 | The study focuses on the pathogenesis of endotoxemia and organ failure in cholestasis, using lactulose (Duphalac) only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| PD | Kot_1992 | not_relevant | 1 | 0 | The paper is a qualitative review of clinical efficacy and safety, lacking any quantitative pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Laudat_1994 | irrelevant | 1 | 2 | The study uses lactulose as a diagnostic probe for intestinal permeability and reports urinary excretion percentages rather than pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Lavielle_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for saquinavir, not lactulose. |
| PD | Lavielle_2007 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of saquinavir and does not report any pharmacodynamic or exposure-response data for lactulose. |
| PD | Lee_2020 | not_relevant | 0 | 0 | The paper is a study protocol for a breath test validation and does not report any pharmacodynamic or exposure-response data for lactulose. |
| PGx | Li_2011 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of lactulose in correcting dysbiosis but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of olanzapine, not lactulose. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper is a protocol for a pharmacokinetic study of olanzapine in anorexia nervosa and does not report any pharmacodynamic or exposure-response data for lactulose. |
| PD | Longhitano_2020 | not_relevant | 0 | 0 | The paper is a literature review on gut alterations in sepsis and mentions the lactulose/mannitol test only as a diagnostic marker for intestinal permeability, without reporting any pharmacodynamic or exposure-response data for lactulose. |
| PD | Lopez_2026 | not_relevant | 0 | 0 | The study investigates the effect of colostrum replacer dilution on IgG absorption and GI permeability; lactulose is used only as a marker for permeability, and no pharmacodynamic or exposure-response relationship for lactulose itself is reported. |
| PGx | Mao_2026 | not_relevant | 0 | 0 | The paper focuses on the protein engineering of an enzyme for the industrial biosynthesis of lactulose, not on the pharmacogenomics of lactulose metabolism or response in humans. |
| popPK | Marrella_2020 | irrelevant | 0 | 0 | The study is an in vitro permeability assay using lactulose as a diagnostic probe for intestinal barrier integrity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | McGee_2011 | not_relevant | 0 | 0 | The paper is a systematic review of probiotics for hepatic encephalopathy and does not report any pharmacodynamic or exposure-response analysis for lactulose. |
| PD | Moore_2020 | not_relevant | 0 | 0 | The paper investigates the dose-response of alanyl-glutamine, not lactulose; lactulose is used only as a marker for gut permeability in the primary outcome. |
| popPK | Mouly_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ganciclovir, using lactulose only as a diagnostic marker for intestinal permeability (lactulose/mannitol ratio) rather than as the subject drug. |
| popPK | ORourke_1995 | irrelevant | 1 | 0 | Lactulose is used as a probe for paracellular transport rather than being the subject of a pharmacokinetic study, and no PK parameters (CL, V, etc.) are reported. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for lactulose. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not mention lactulose or report any pharmacodynamic or exposure-response data. |
| PD | Olesen_1994 | not_relevant | 2 | 1 | The paper uses lactulose only as a qualitative reference for transit time and fermentation magnitude, without providing numeric concentration-effect or dose-response parameters for lactulose itself. |
| PD | Olesen_1997 | not_relevant | 0 | 0 | The paper investigates the dose-response of wheat bread malabsorption and fermentation, using lactulose only as a qualitative reference for breath-hydrogen magnitude, without reporting any PD parameters or exposure-response data for lactulose. |
| PD | Olesen_1999 | not_relevant | 3 | 1 | The study describes a qualitative dose-response observation of carbohydrate malabsorption in short bowel patients but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model for lactulose. |
| popPK | Pashameah_2024 | irrelevant | 0 | 0 | The study investigates the antiviral mechanism of lactulose octasulfate (LOS) binding to ACE2 in vitro and in silico, not the pharmacokinetic disposition of lactulose. |
| PD | Paterson_2007 | not_relevant | 0 | 0 | The paper studies AT-1001, not lactulose; lactulose is used only as a marker for intestinal permeability, and no PD parameters for lactulose are reported. |
| popPK | Pinheiro_2006 | irrelevant | 0 | 0 | Lactulose is used as a diagnostic marker in the lactulose/mannitol permeability test, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Ponziani_2016 | irrelevant | 0 | 0 | The paper is a review of small intestinal bacterial overgrowth diagnosis and treatment, containing no pharmacokinetic data for lactulose. |
| popPK | Ramos_2024 | irrelevant | 0 | 0 | The study evaluates lactulose as a bowel preparation agent for colonoscopy efficacy and safety, not for pharmacokinetic parameters. |
| popPK | Riedel_2025 | irrelevant | 0 | 0 | Lactulose is used solely as a diagnostic probe in the lactulose/mannitol permeability test, not as a subject drug for pharmacokinetic modeling. |
| PD | Rollins_2000 | not_relevant | 0 | 0 | The paper uses the lactulose/mannitol test as a marker for intestinal permeability to assess the effect of vitamin A, but does not report a pharmacodynamic or exposure-response relationship for lactulose itself. |
| popPK | Rudiman_2023 | irrelevant | 0 | 0 | The paper is a systematic review of topical sucralfate for wound healing and pain, containing no pharmacokinetic data for lactulose. |
| PD | Rudiman_2023 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of topical sucralfate for pain and wound healing, containing no pharmacokinetic data, exposure-response modeling, or numeric PD parameters for lactulose. |
| popPK | Saltzman_1995 | irrelevant | 1 | 0 | Lactulose is used as a diagnostic probe for intestinal permeability, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Sarria_2004 | irrelevant | 0 | 0 | The study investigates iron bioavailability in rats, and lactulose is only mentioned as a potential byproduct affecting the results, not as the subject of pharmacokinetic analysis. |
| popPK | Sarriá_2001 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PD | Schiano_2010 | not_relevant | 1 | 0 | The text is a qualitative review of treatment options for hepatic encephalopathy and does not report any numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves for lactulose. |
| popPK | Schuchardt_2017 | irrelevant | 0 | 0 | The paper is a review on magnesium bioavailability and mentions lactulose only as a dietary factor that enhances magnesium uptake, not as the subject of pharmacokinetic analysis. |
| PD | Schumann_2002 | not_relevant | 1 | 0 | The text is a general review of medical and technological properties without reporting specific numeric PD parameters or exposure-response data. |
| PGx | Shao_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of oridonin in PI-IBS using lactulose/mannitol as a marker for intestinal permeability, not as a drug subject to pharmacogenomic analysis. |
| popPK | Snipe_2017 | irrelevant | 0 | 0 | Lactulose is used as a diagnostic marker for intestinal permeability (lactulose:L-rhamnose ratio), not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Snipe_2018 | irrelevant | 0 | 0 | Lactulose is used only as a diagnostic probe for intestinal permeability (lactulose:L-rhamnose ratio), not as a subject drug for pharmacokinetic parameter estimation. |
| popPK | Somani_2016 | irrelevant | 0 | 0 | The study focuses on paracetamol, theophylline, indomethacin, and ibuprofen; lactulose is not mentioned or studied. |
| PD | Somani_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (absorption) of BCS class I and II drugs (paracetamol, theophylline, indomethacin, ibuprofen) in neonates and does not mention lactulose or report any pharmacodynamic or exposure-response relationships. |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper focuses on statistical methods for detecting adverse drug reactions in polypharmacy and does not report pharmacokinetic parameters for lactulose. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reactions in polypharmacy using regression models on real-world data and does not report any pharmacodynamic or exposure-response relationship for lactulose. |
| PD | Spiegel_2011 | not_relevant | 0 | 0 | The paper is a review discussing the epidemiological link between SIBO and IBS, explicitly stating that no dose-response relationship exists, and does not report any pharmacodynamic modeling or numeric PD parameters for lactulose. |
| PD | Strobach_2025 | not_relevant | 0 | 0 | The paper is a retrospective screening study using lactulose as a marker for hepatic impairment and does not report any pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Strygler_1990 | irrelevant | 0 | 0 | Lactulose is used only as a laxative to induce diarrhea in a study measuring alpha-1-antitrypsin clearance, not as the subject of pharmacokinetic analysis. |
| popPK | Sturgeon_2026 | irrelevant | 0 | 0 | Lactulose is used as a diagnostic probe in the lactulose:mannitol ratio (LMR) test to assess intestinal permeability, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Sun_2026 | not_relevant | 0 | 0 | The paper focuses on protein engineering for the biomanufacturing of epilactose and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of lactulose in humans. |
| PD | Swansson_2023 | not_relevant | 0 | 0 | The paper is a narrative review of branched-chain amino acids (BCAA) for hepatic encephalopathy and does not report any pharmacodynamic or exposure-response data for lactulose. |
| PGx | Timmer_2021 | not_relevant | 0 | 0 | The paper investigates faecal microbiome composition in UCD and PKU patients and notes associations with lactulose use, but it does not report pharmacokinetic or pharmacodynamic parameters of lactulose or any gene variant effects on them. |
| popPK | Uslu_2005 | irrelevant | 0 | 0 | The study uses lactulose as a therapeutic agent for endotoxin inactivation in obstructive jaundice and does not report any pharmacokinetic parameters for lactulose. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not contain any pharmacokinetic data for lactulose. |
| PD | Vats_2025 | not_relevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not contain any pharmacodynamic or exposure-response data for lactulose. |
| popPK | Verscheijden_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine, not lactulose. |
| PD | Verscheijden_2021 | not_relevant | 0 | 0 | The paper reports a PBPK/PD model for morphine, not lactulose. |
| popPK | Weber_1979 | irrelevant | 0 | 0 | The study investigates the effect of lactulose on urea metabolism and nitrogen excretion, not the pharmacokinetic disposition parameters (CL, V, ka) of lactulose itself. |
| popPK | Weber_1982 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of lactulose on urea and ammonia production in cirrhotic subjects, not on the pharmacokinetic disposition parameters (CL, V, ka) of lactulose itself. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not mention lactulose or report any pharmacokinetic parameters. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for PONV and does not mention lactulose or report any pharmacodynamic or exposure-response parameters. |
| popPK | Weiss-Tessbach_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dabigatran, with lactulose serving only as a co-administered laxative to test for drug-drug interactions, not as the subject drug. |
| PGx | Wolever_2021 | not_relevant | 0 | 0 | The paper investigates the effect of gene variants on starch digestibility and glycemic index, not on the pharmacokinetics or pharmacodynamics of lactulose. |
| popPK | Wong_2019 | irrelevant | 2 | 5 | Lactulose is used as a diagnostic probe for intestinal permeability rather than as the subject drug for PK parameter estimation, and no compartmental PK parameters (CL, V, ka) are reported. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The paper is a clinical case report on hyperammonemia where lactulose is used as a therapeutic agent, not a pharmacokinetic study of lactulose. |
| PGx | Ye_2025 | not_relevant | 0 | 0 | The study investigates the mechanism of lactulose in geese using transcriptomics and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Zuckerman_2004 | irrelevant | 1 | 0 | The study uses lactulose as a diagnostic probe for intestinal permeability and reports urinary excretion percentages, not pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | de_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of rifaximin in human intestinal organoids, with lactulose mentioned only as a standard treatment for hepatic encephalopathy without any pharmacokinetic data. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper studies the mechanism of action of rifaximin (a PXR agonist) on intestinal organoids and does not report pharmacogenomic effects on the PK or PD of lactulose. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no study data, results, or pharmacodynamic parameters for lactulose. |
| popPK | unknown_2018_2 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | unknown_2018_2 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no study data, pharmacokinetic/pharmacodynamic analysis, or numeric parameters for lactulose. |
| popPK | unknown_2018_3 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2018_3 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of lactulose pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of lactulose pharmacodynamics. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of lactulose pharmacodynamics. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no specific data, models, or parameters for lactulose. |
| popPK | van_2000 | irrelevant | 2 | 0 | The study uses lactulose as a diagnostic marker for gut permeability and reports urinary recovery/excretion data rather than compartmental pharmacokinetic parameters (CL, V, ka) for lactulose itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
