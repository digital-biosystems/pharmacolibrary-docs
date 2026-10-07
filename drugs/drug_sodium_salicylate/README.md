<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;sodium salicylate&quot;}]"></div>

# sodium salicylate

- **generic name:** sodium salicylate
- **ATC codes:** `N02BA04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Sodium salicylate is a salicylate non-steroidal anti-inflammatory drug used as an analgesic and antipyretic. It is classified in the nervous-system analgesics group of the ATC system, but no specific marketing authorisation information is available, so its current use appears limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414547](https://www.wikidata.org/wiki/Q414547) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| salicylic acid (sodium_salicylate) | parent | 160.104 | C7H5NaO3 | PubChem | [16760658](https://pubchem.ncbi.nlm.nih.gov/compound/16760658) | Lowenthal_1974 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:17 | 4:32 | 1/1/2 | 1/1/0 | 0/0/0 | 302,600/23,835 | einfracz / qwen3.8-27b | 11 | 7/6 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Mathurkar_2018_reference](drugs/drug_sodium_salicylate/SodiumSalicylate_Mathurkar2018_reference.md) | — | — (no model) | 0 | Mathurkar S et al., Pharmacokinetics of Salicylic Acid Foll…, Animals : an open access jo… (2018) | [10.3390/ani8070122](https://doi.org/10.3390/ani8070122) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Lowenthal_1974_four_normal_subjects](drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects.md) | — | 1-compartment (no model) | 3 | Lowenthal DT et al., Kinetics of salicylate elimination by a…, The Journal of clinical inv… (1974) | [10.1172/JCI107865](https://doi.org/10.1172/JCI107865) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Lowenthal_1974_six_anephric_patients](drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients.md) | — | 1-compartment (no model) | 3 | Lowenthal DT et al., Kinetics of salicylate elimination by a…, The Journal of clinical inv… (1974) | [10.1172/JCI107865](https://doi.org/10.1172/JCI107865) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lowenthal_1974_patients](drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_patients.md) | — | 1-compartment (no model) | 9 | Lowenthal DT et al., Kinetics of salicylate elimination by a…, The Journal of clinical inv… (1974) | [10.1172/JCI107865](https://doi.org/10.1172/JCI107865) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Cao_2011_Glu](drugs/drug_sodium_salicylate/pd_Cao_2011_Glu.md) | blood glucose biomarker turnover ← salicylate | — | Cao Y et al., Modeling diabetes disease progression a…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185686](https://doi.org/10.1124/jpet.111.185686) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Cory_2005_inhibition_of_tumor_cell_growth](drugs/drug_sodium_salicylate/pd_Cory_2005_inhibition_of_tumor_cell_growth.md) | inhibition of tumor cell growth ← sodium salicylate · inhibition effect | — | Cory AH et al., Phenolic compounds, sodium salicylate a…, In vivo (Athens, Greece) (2005) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 55 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Poźniak_2013.pdf` | Poźniak B et al., Comparative pharmacokinetics of acetyls…, British poultry science (2013) | popPK | 10 | [10.1080/00071668.2013.809403](https://doi.org/10.1080/00071668.2013.809403) | [23906222](https://pubmed.ncbi.nlm.nih.gov/23906222) | The paper reports quantitative non-compartmental PK parameters (MRT, T1/2, ClB, Vss) for sodium salicylate in chickens and turkeys. |
| `Wójcicki_1981.pdf` | Wójcicki J et al., Effect of unilateral nephrectomy in rab…, Polish journal of pharmacol… (1981) | popPK | 9 | not captured | [7335555](https://pubmed.ncbi.nlm.nih.gov/7335555) | The study reports quantitative pharmacokinetic parameters (t0.5, kel, AUC) for sodium salicylate in rabbits, though specific absolute values for Volume or Clearance are not explicitly listed in the text. |
| `Vidhya_2020.pdf` | Vidhya R et al., Anti-inflammatory effects of troxerutin…, Immunopharmacology and immu… (2020) | pd | 5 | [10.1080/08923973.2020.1806870](https://doi.org/10.1080/08923973.2020.1806870) | [32762381](https://www.ncbi.nlm.nih.gov/pubmed/32762381) | metadata signals extractable PD data (IC50) |
| `Chakraborty_2020.pdf` | Chakraborty K et al., An unreported bis-abeo cembrane-type di…, Natural product research (2020) | pd | 4 | [10.1080/14786419.2018.1527833](https://doi.org/10.1080/14786419.2018.1527833) | [30580610](https://www.ncbi.nlm.nih.gov/pubmed/30580610) | metadata signals extractable PD data (IC50) |
| `Costa_2014.pdf` | Costa SP et al., Automated evaluation of pharmaceuticall…, Journal of hazardous materi… (2014) | pd | 4 | [10.1016/j.jhazmat.2013.11.052](https://doi.org/10.1016/j.jhazmat.2013.11.052) | [24355776](https://www.ncbi.nlm.nih.gov/pubmed/24355776) | metadata signals extractable PD data (EC50) |
| `Hurni_1993.pdf` | Hurni MA et al., Permeability enhancement in Caco-2 cell…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [7504101](https://www.ncbi.nlm.nih.gov/pubmed/7504101) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T06:13:54.104684+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abe_2007 | not_relevant | 0 | 0 | The paper investigates the role of MAPK signaling in ameloblast differentiation and mentions sodium salicylate as a general MAPK inhibitor/activator context, but does not report any pharmacogenomic effects or specific PK/PD parameter changes linked to genetic variants. |
| popPK | Adikwu_2006 | irrelevant | 0 | 0 | The study focuses on glibenclamide formulation and release, using sodium salicylate only as a comparator enhancer without reporting any pharmacokinetic parameters for sodium salicylate itself. |
| PD | Adikwu_2006 | not_relevant | 1 | 0 | The paper reports qualitative pharmacodynamic effects (glucose lowering) for glibenclamide formulations but provides no numeric PD parameters, concentration-effect curves, or exposure-response analysis for sodium salicylate. |
| popPK | Baert_2003 | relevant | 9 | 2 | The study is a primary pharmacokinetic investigation of sodium salicylate in birds, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided abstract text. |
| PD | Baert_2003 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, elimination rate) and contains no pharmacodynamic or exposure-response data. |
| popPK | Banditt_1983 | irrelevant | 1 | 0 | The study focuses on caffeine pharmacokinetics, and sodium salicylate is mentioned only in the context of dosing (or as a potential comparator/co-administered agent) without any reported PK parameters for salicylate. |
| popPK | Booty_2018 | relevant | 8 | 2 | The study is a pharmacokinetic investigation of sodium salicylate in chickens using compartmental and noncompartmental approaches, but the specific numeric values for clearance, volume, or half-life are not provided in the text, only duration above MEC. |
| PD | Booty_2018 | not_relevant | 1 | 0 | The paper reports only pharmacokinetic data and compares exposure duration to a minimum effective concentration (MEC), but explicitly states that pharmacodynamic modeling studies are needed in the future, providing no numeric PD parameters or concentration-effect relationship. |
| popPK | Cao_2011 | relevant | 8 | 3 | Study reports PK modeling of salicylate (metabolite of salsalate) in rats, but specific numeric parameter values are referenced in Table 1 which is not included in the provided evidence. |
| popPK | Carpenter_2016 | irrelevant | 1 | 0 | The study evaluates sodium salicylate's effect on milk yield and metabolic health (glucose, BHB) in dairy cattle, not its pharmacokinetic disposition parameters (clearance, volume, half-life values). |
| popPK | Cashman_1995 | irrelevant | 0 | 0 | The paper is a review of NSAID mechanisms of action and clinical use, containing no original quantitative pharmacokinetic parameter values for sodium salicylate. |
| PD | Cashman_1995 | not_relevant | 1 | 0 | The text is a qualitative review of NSAID mechanisms of action and does not report any numeric pharmacodynamic parameters or exposure-response data for sodium salicylate. |
| popPK | Chakraborty_2020 | irrelevant | 0 | 0 | The paper is a natural product chemistry study where sodium salicylate is used only as a reference standard for anti-lipoxygenase activity, not as a subject of pharmacokinetic analysis. |
| PD | Chakraborty_2020 | not_relevant | 0 | 0 | The paper reports IC50 values for a novel diterpenoid and uses sodium salicylate only as a qualitative reference standard without providing a dose-response curve or specific numeric PD parameters for the drug. |
| popPK | Chao_1988 | irrelevant | 0 | 0 | The paper is a cytotoxicity study using sodium salicylate as a test compound, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Cleveland_1984 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of phenytoin as the subject drug, with sodium salicylate serving only as a co-administered probe/comparator to assess interactions. |
| popPK | Cory_2005 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on tumor cell growth and apoptosis, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Costa_2014 | irrelevant | 0 | 0 | The paper is a toxicity screening study of ionic liquids, not a pharmacokinetic study of sodium salicylate. |
| PD | Costa_2014 | not_relevant | 0 | 0 | The paper evaluates the toxicity of ionic liquid pharmaceuticals (IL-APIs) and does not report any pharmacodynamic or exposure-response data for sodium salicylate. |
| popPK | Cronstein_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on corticosteroids and leukocyte adhesion, using sodium salicylate only as a negative control without reporting any pharmacokinetic parameters. |
| PD | Cronstein_1992 | not_relevant | 0 | 0 | The paper reports that sodium salicylate had no effect on the measured endpoints, providing no numeric PD parameters or dose-response relationship for the drug. |
| popPK | Cronstein_1994 | irrelevant | 0 | 0 | The study describes an in vitro mechanistic effect on neutrophil adhesion and does not report any pharmacokinetic parameters. |
| popPK | Dandekar_1977 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the probe drug tetraethylammonium ion, using sodium salicylate only as a competing inhibitor to study renal elimination mechanisms. |
| popPK | Davis_1996 | irrelevant | 0 | 0 | The study is a reproductive toxicity assessment in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for sodium salicylate. |
| popPK | Farivar_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on nitric oxide synthase inhibition, not a pharmacokinetic study, and contains no disposition parameters for sodium salicylate. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates neuroprotection by rosiglitazone in tramadol-induced Parkinsonian rats and contains no data for sodium salicylate. |
| PD | Hadi_2025 | not_relevant | 0 | 0 | The paper investigates rosiglitazone, not sodium salicylate, and reports dose-response data for rosiglitazone without any mention of sodium salicylate. |
| popPK | Hinz_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on COX-2 inhibition and does not report any pharmacokinetic parameters for sodium salicylate. |
| popPK | Hurni_1993 | irrelevant | 0 | 0 | The study is an in-vitro permeability enhancement assay using Caco-2 cells and does not report population pharmacokinetic parameters (CL, V, etc.) for sodium salicylate. |
| popPK | Lagunas_2004 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on heat shock response and does not report any pharmacokinetic parameters for sodium salicylate. |
| PD | Lagunas_2004 | not_relevant | 2 | 1 | The paper discusses NSAIDs (indomethacin/ibuprofen) and mentions sodium salicylate only as background context, providing no specific concentration-effect data or numeric PD parameters for sodium salicylate. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The study is an in-vitro cytostatic/efficacy assessment measuring IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Liu_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channel blockade, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lu_2009 | irrelevant | 0 | 0 | The study investigates the electrophysiological mechanism of sodium salicylate's action on glycine receptors (in vitro) and contains no pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Mathurkar_2018 | not_relevant | 2 | 1 | The study is purely pharmacokinetic (NCA) and explicitly states that PK/PD modeling is required to determine effective concentrations, providing no numeric PD parameters or dose-response curves. |
| popPK | McQueen_2021 | irrelevant | 0 | 0 | The paper is a mathematical modeling study of in-vitro smooth muscle cell proliferation and drug binding kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume for sodium salicylate. |
| popPK | Mitchell_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating the inhibition of COX-2 activity and does not report any pharmacokinetic parameters for sodium salicylate. |
| popPK | Mota_2021 | irrelevant | 0 | 0 | The study is an in vitro enzyme inhibition assay measuring EC50 values, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Obata_2000 | irrelevant | 0 | 0 | Sodium salicylate is used as a diagnostic probe for hydroxyl radical detection, not as the subject of a pharmacokinetic study. |
| popPK | Omidian_2023 | irrelevant | 0 | 0 | The paper is a review of curcumin delivery systems and does not contain pharmacokinetic data for sodium salicylate. |
| PD | Omidian_2023 | not_relevant | 0 | 0 | The paper is a review on curcumin delivery systems and does not report any pharmacodynamic or exposure-response data for sodium salicylate. |
| popPK | Santini_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular effects (apoptosis, differentiation) in cancer cells, not a pharmacokinetic study of sodium salicylate. |
| popPK | Somani_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paracetamol, theophylline, indomethacin, and ibuprofen in neonates; sodium salicylate is not mentioned or studied. |
| PD | Somani_2016 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PK) modeling of drug absorption in neonates and does not report any pharmacodynamic (PD) or exposure-response relationships for sodium salicylate or any other drug. |
| popPK | Szczawińska_1974 | irrelevant | 0 | 0 | The evidence provided contains only the title of the paper and no quantitative pharmacokinetic parameters or numeric values for sodium salicylate. |
| PD | Szczawińska_1974 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to determine if numeric PD parameters are reported or derivable. |
| popPK | Tunstall_1995 | irrelevant | 0 | 0 | The study is an electrophysiological/mechanistic investigation of salicylate's effect on outer hair cell membrane capacitance in guinea pigs, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Turner_2008 | irrelevant | 0 | 0 | The study is a behavioral assessment of tinnitus in rats and does not report any pharmacokinetic parameters for sodium salicylate. |
| popPK | Vervoordeldonk_1996 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on gene expression and enzyme inhibition, containing no pharmacokinetic parameters for sodium salicylate. |
| popPK | Vidhya_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of troxerutin's anti-inflammatory effects where sodium salicylate is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Vidhya_2020 | not_relevant | 0 | 0 | The paper focuses on troxerutin and reports IC50 values for troxerutin and elastatinal, but provides no numeric PD parameters or exposure-response data for sodium salicylate. |
| PGx | Wassermann_2013 | not_relevant | 0 | 0 | The paper describes an in vitro cell transport model involving the ABCG2 transporter, not a pharmacogenomic association between a gene variant and a pharmacokinetic or pharmacodynamic parameter in humans. |
| PGx | Wu_2001 | not_relevant | 0 | 0 | The paper investigates the interaction between sodium salicylate and CYP2E1 expression levels (induced vs. not induced) in cell models, but does not report human pharmacogenomic variants (SNPs/genotypes) affecting the drug's PK or PD. |
| popPK | Yamazaki_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and apoptosis, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ying_2009 | irrelevant | 0 | 0 | The paper is a mechanistic study on vascular physiology and does not report any pharmacokinetic parameters for sodium salicylate. |
| popPK | Yun_1999 | irrelevant | 0 | 0 | The study focuses on insulin pharmacodynamics and sodium salicylate acts only as an absorption enhancer, with no PK parameters reported for sodium salicylate itself. |
| PD | Yun_1999 | not_relevant | 2 | 1 | The paper reports qualitative improvements in glucose lowering (AUC, Cnadir) with sodium salicylate but does not provide a concentration-effect or dose-response curve or numeric PD parameters (e.g., Emax, EC50) for sodium salicylate itself. |
| popPK | de_2010 | irrelevant | 2 | 0 | The study is primarily pharmacodynamic, and while it mentions that the pharmacokinetic properties of sodium salicylate were not altered, it does not provide any quantitative PK parameter values (such as clearance, volume, or half-life) in the evidence. |
| PD | de_2010 | not_relevant | 2 | 1 | The paper reports only qualitative observations (e.g., "no decrease," "slightly decreased") regarding the effect of sodium salicylate on inflammation markers and body temperature, without providing numeric PD parameters or concentration-effect curves. |
| popPK | de_2025 | irrelevant | 0 | 0 | The paper studies the formulation and in vitro properties of trans-dehydrocrotonin, a completely different drug, with no mention of sodium salicylate. |
| PD | de_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro antioxidant activity of trans-dehydrocrotonin in a SNEDDS system; sodium salicylate is only listed as a reagent, and no pharmacodynamic or exposure-response data for it are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:13 UTC</sub>
