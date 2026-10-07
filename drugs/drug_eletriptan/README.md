<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;eletriptan&quot;}]"></div>

# eletriptan

- **generic name:** eletriptan
- **ATC codes:** `N02CC06`
- **DrugBank:** [DB00216](https://go.drugbank.com/drugs/DB00216) · **PubChem:** [CID 77993](https://pubchem.ncbi.nlm.nih.gov/compound/77993)
- **molar mass:** 382.519 g/mol (C22H26N2O2S) — DrugBank
- **groups:** approved, investigational

## About

Eletriptan is a serotonin receptor agonist used to treat migraine attacks. It is an approved medicine, available as an antimigraine drug in the selective serotonin agonist class.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415032](https://www.wikidata.org/wiki/Q415032) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:32 | 2:27 | 0/0/0 | 1/0/1 | 0/0/0 | 131,345/6,207 | einfracz / qwen3.8-27b | 8 | 6/7 | 7/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tokuoka_2015_1B](drugs/drug_eletriptan/pd_Tokuoka_2015_1B.md) | serotonin 5-HT1B receptor occupancy (Φ1B) ← eletriptan · direct linear effect | — | Tokuoka K et al., Theoretical analysis of headache recurr…, The journal of headache and… (2015) | [10.1186/s10194-015-0558-9](https://doi.org/10.1186/s10194-015-0558-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tokuoka_2015_1D](drugs/drug_eletriptan/pd_Tokuoka_2015_1D.md) | serotonin 5-HT1D receptor occupancy (Φ1D) ← eletriptan · direct linear effect | — | Tokuoka K et al., Theoretical analysis of headache recurr…, The journal of headache and… (2015) | [10.1186/s10194-015-0558-9](https://doi.org/10.1186/s10194-015-0558-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mandema_2005_pain_free](drugs/drug_eletriptan/pd_Mandema_2005_pain_free.md) | pain free ← eletriptan · direct Emax (saturable) effect | — | Mandema JW et al., Therapeutic benefit of eletriptan compa…, Cephalalgia : an internatio… (2005) | [10.1111/j.1468-2982.2004.00939.x](https://doi.org/10.1111/j.1468-2982.2004.00939.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mandema_2005_pain_relief](drugs/drug_eletriptan/pd_Mandema_2005_pain_relief.md) | pain relief ← eletriptan · direct Emax (saturable) effect | — | Mandema JW et al., Therapeutic benefit of eletriptan compa…, Cephalalgia : an internatio… (2005) | [10.1111/j.1468-2982.2004.00939.x](https://doi.org/10.1111/j.1468-2982.2004.00939.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eletriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` inducer, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (partial agonist), HTR1B (target), HTR1D (target), HTR1E (modulator), HTR1F (target), HTR2B (modulator), HTR7 (modulator), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 66 matched, 83 returned
- **screened:** 7  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kashif_2022.pdf` | Kashif MUR et al., Chitosan/guar gum-based thermoreversibl…, International journal of bi… (2022) | popPK | 8 | [10.1016/j.ijbiomac.2022.06.161](https://doi.org/10.1016/j.ijbiomac.2022.06.161) | [35779651](https://pubmed.ncbi.nlm.nih.gov/35779651) | The study reports in-vivo pharmacokinetic parameters (MRT, AUC) for eletriptan, specifically focusing on a novel delivery system, with numeric values present in the abstract. |
| `Patel_2017.pdf` | Patel H et al., One should avoid retro-orbital pharmaco…, European journal of pharmac… (2017) | popPK | 8 | [10.1016/j.ejps.2017.05.044](https://doi.org/10.1016/j.ejps.2017.05.044) | [28549679](https://pubmed.ncbi.nlm.nih.gov/28549679) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, T1/2) for eletriptan in rats, but the specific numeric values are not explicitly listed in the provided abstract text. |
| `Patel_2019.pdf` | Patel H et al., Differential pharmacokinetic drug-drug…, Xenobiotica; the fate of fo… (2019) | popPK | 8 | [10.1080/00498254.2018.1540805](https://doi.org/10.1080/00498254.2018.1540805) | [30588869](https://pubmed.ncbi.nlm.nih.gov/30588869) | Study reports non-compartmental PK parameters (Cmax, AUC) for eletriptan in rats, but lacks specific clearance/volume values and compartmental modeling required for population-PK extraction. |
| `Safhi_2023.pdf` | Safhi AY et al., Statistically Optimized Polymeric Bucca…, Pharmaceuticals (Basel, Swi… (2023) | popPK | 8 | [10.3390/ph16111551](https://doi.org/10.3390/ph16111551) | [38004417](https://pubmed.ncbi.nlm.nih.gov/38004417) | The paper reports in vivo PK parameters (Cmax, AUC, t1/2) for eletriptan, but specific values for clearance, volume, and half-life are not explicitly listed in the text provided, only Cmax comparisons. |
| `Shah_2001.pdf` | Shah AK et al., Pharmacokinetics and safety of oral ele…, Journal of clinical pharmac… (2001) | popPK | 7 | [10.1177/00912700122012922](https://doi.org/10.1177/00912700122012922) | [11762561](https://pubmed.ncbi.nlm.nih.gov/11762561) | The paper is a pharmacokinetic study in humans reporting quantitative parameters (Cmax, Tmax, AUC, kel, t1/2) for eletriptan, although compartmental parameters like CL and V are not explicitly listed in the provided text. |
| `Shah_2002.pdf` | Shah AK et al., The pharmacokinetics and safety of sing…, Journal of clinical pharmac… (2002) | popPK | 7 | [10.1177/00912700222011571](https://doi.org/10.1177/00912700222011571) | [12017346](https://pubmed.ncbi.nlm.nih.gov/12017346) | The study reports key pharmacokinetic parameters for eletriptan (tmax, half-life) in humans, but specific numeric values for clearance (CL) or volume of distribution (V) are not explicitly provided in the extracted text. |
| `Milton_2002.pdf` | Milton KA et al., Pharmacokinetics, pharmacodynamics, and…, Journal of clinical pharmac… (2002) | popPK | 5 | [10.1177/00912700222011580](https://doi.org/10.1177/00912700222011580) | [12017347](https://pubmed.ncbi.nlm.nih.gov/12017347) | The abstract reports qualitative PK trends and a range for half-life (4-5 h) and bioavailability (~50%), but does not provide specific numeric values for clearance (CL), volume of distribution (V), or other disposition parameters. |
| `Hou_2019.pdf` | Hou M et al., Efficacy of triptans for the treatment…, European journal of clinica… (2019) | pd | 4 | [10.1007/s00228-019-02748-4](https://doi.org/10.1007/s00228-019-02748-4) | [31446449](https://www.ncbi.nlm.nih.gov/pubmed/31446449) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Evans_2003.pdf` | Evans DC et al., Eletriptan metabolism by human hepatic…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.7.861](https://doi.org/10.1124/dmd.31.7.861) | [12814962](https://www.ncbi.nlm.nih.gov/pubmed/12814962) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Mathew_2003.pdf` | Mathew NT et al., Tolerability and safety of eletriptan i…, Headache (2003) | pgx | 7 | [10.1046/j.1526-4610.2003.03188.x](https://doi.org/10.1046/j.1526-4610.2003.03188.x) | [14511273](https://www.ncbi.nlm.nih.gov/pubmed/14511273) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T06:32:08.514152+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abo_2022 | irrelevant | 4 | 2 | The study is primarily a formulation and brain-targeting assessment in mice, reporting derived indices (DTE%, DTI) rather than standard compartmental PK parameters (CL, V, t1/2), and specific numeric PK values for the drug are not fully present in the text. |
| popPK | Adelman_2001 | irrelevant | 1 | 0 | The paper is a clinical review comparing the efficacy and tolerability of triptans without reporting original quantitative pharmacokinetic parameter values for eletriptan. |
| popPK | Ahmed_2017 | irrelevant | 1 | 0 | The study is an analytical method development paper for HPLC validation in rat plasma; while it mentions applying the method to zolmitriptan, it does not provide quantitative pharmacokinetic parameters (clearance, volume, etc.) for eletriptan. |
| popPK | Amundsen_2021 | irrelevant | 3 | 0 | The study reports relative infant doses and breast milk concentrations for lactation safety assessment, but does not report standard pharmacokinetic disposition parameters (CL, V, ka) for eletriptan. |
| popPK | Ashkenazi_2003 | irrelevant | 0 | 0 | The paper is a general review of migraine management that discusses eletriptan qualitatively but does not report any quantitative pharmacokinetic parameters. |
| popPK | Belvis_2014 | irrelevant | 0 | 0 | The paper is a general review of migraine treatments and triptans without reporting any original quantitative pharmacokinetic parameter values for eletriptan. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review of migraine treatment and triptan selection, mentioning pharmacodynamics qualitatively but providing no numeric PD parameters or exposure-response data for eletriptan. |
| popPK | Belvís_2009 | irrelevant | 0 | 0 | The paper is a review discussing triptan selection and lacks original quantitative pharmacokinetic parameter values for eletriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for eletriptan. |
| popPK | Boucher_2018 | irrelevant | 0 | 0 | The paper is a tutorial on statistical methods for meta-analysis and contains no pharmacokinetic data or parameter values for eletriptan. |
| PD | Boucher_2018 | not_relevant | 0 | 0 | The paper is a methodological tutorial on model-based meta-analysis using naproxen and WOMAC pain scores as an example; it does not report any pharmacodynamic or exposure-response data for eletriptan. |
| PGx | Capi_2016 | not_relevant | 0 | 0 | The paper is a clinical review of eletriptan's efficacy, safety, and drug-drug interactions, containing no data on genetic variants or pharmacogenomic effects. |
| popPK | Casida_2017 | irrelevant | 0 | 0 | The paper is a review discussing the general concept of prodrugs and mentions eletriptan only as an example without providing any quantitative pharmacokinetic parameters. |
| PD | Casida_2017 | not_relevant | 1 | 0 | The paper is a qualitative review of prodrugs and propesticides that mentions eletriptan as an example of a neuroactive prodrug but provides no numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Chowdhury_2010 | irrelevant | 0 | 0 | The text is a general review of migraine treatment strategies and does not contain any pharmacokinetic data or quantitative disposition parameters for eletriptan. |
| popPK | Cole_2001 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for eletriptan. |
| popPK | Deleu_2000 | irrelevant | 1 | 0 | The paper is a comparative review of triptans and does not report original quantitative pharmacokinetic parameter values for eletriptan. |
| popPK | Diener_2000 | irrelevant | 2 | 0 | The paper is a review of efficacy and pharmacology that qualitatively mentions absorption and bioavailability but provides no quantitative PK parameter values (CL, V, t1/2, etc.). |
| popPK | EFPIA_2016 | irrelevant | 0 | 0 | The paper is a white paper on general good practices for model-informed drug development and does not contain specific pharmacokinetic data for eletriptan. |
| PD | EFPIA_2016 | not_relevant | 0 | 0 | The paper is a white paper on Model-Informed Drug Discovery (MID3) best practices and does not report specific pharmacodynamic data or parameters for eletriptan. |
| popPK | Edvinsson_2005 | irrelevant | 1 | 0 | The study is an in vitro pharmacological investigation of receptor-mediated vasoconstriction and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for eletriptan. |
| popPK | Esim_2017 | irrelevant | 0 | 0 | The study focuses on the preparation of nanoparticles and development of an analytical assay, reporting no in vivo pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Evans_2003 | not_relevant | 2 | 1 | The paper reports in vitro/in vivo pharmacokinetic studies using recombinant enzymes and transgenic mice (Mdr1a), which characterize drug mechanisms but do not report human genetic variation effects. |
| popPK | Fox_2000 | irrelevant | 1 | 0 | This is a tolerability and correlation study, not a pharmacokinetic study, and it contains no quantitative disposition parameters (CL, V, t1/2, etc.) for eletriptan. |
| PD | Fox_2000 | not_relevant | 2 | 1 | The paper discusses qualitative rank orders and correlations for adverse events but explicitly states that adverse event frequencies cannot be predicted from dose or exposure, and provides no numeric PD parameters (Emax, EC50, etc.) or derivable concentration-effect curves. |
| popPK | Färkkilä_2005 | irrelevant | 2 | 0 | The text is a clinical efficacy review that lacks any quantitative pharmacokinetic parameters (CL, V, ka, t1/2 values) for eletriptan. |
| popPK | Gawel_2001 | irrelevant | 2 | 0 | The text provides a general drug profile with only bioavailability and qualitative comparative efficacy data, lacking specific quantitative PK parameters like clearance, volume, or rate constants. |
| popPK | Goadsby_2000 | irrelevant | 0 | 0 | This is a clinical efficacy study for acute migraine treatment that does not report quantitative pharmacokinetic parameters. |
| popPK | Hou_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis of migraine efficacy (pain-free rates) and does not report pharmacokinetic parameters like clearance or volume for eletriptan. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | This is a review of herbal-drug interactions where eletriptan is mentioned only in a case report regarding serotonin syndrome, with no pharmacokinetic parameters reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The text is a general table of herbal medicine-drug interactions and does not report pharmacogenomic effects (gene variants) on eletriptan PK/PD. |
| popPK | Kassem_2016 | irrelevant | 0 | 0 | This is a narrative review on formulation approaches for triptans and does not report original quantitative pharmacokinetic parameter values for eletriptan. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | MaassenVanDenBrink_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of craniovascular selectivity in isolated human blood vessels, not a pharmacokinetic study. |
| popPK | Mandema_2005 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (pain relief/pain free) and dose-response modeling, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Mathew_2003 | not_relevant | 0 | 0 | The paper is a general safety review of eletriptan and mentions CYP3A4 metabolism, but it does not report any gene variants, genotypes, or pharmacogenomic effects on PK or PD parameters. |
| popPK | Millson_2000 | irrelevant | 1 | 0 | The paper is a qualitative clinical review of triptans that discusses pharmacokinetic properties conceptually but does not report specific quantitative disposition parameters (CL, V, ka, etc.) for eletriptan. |
| popPK | Milton_2002 | relevant | 5 | 1 | The abstract reports qualitative PK trends and a range for half-life (4-5 h) and bioavailability (~50%), but does not provide specific numeric values for clearance (CL), volume of distribution (V), or other disposition parameters. |
| PD | Milton_2002 | not_relevant | 4 | 2 | The text mentions a linear PK/PD model predicting diastolic blood pressure changes but does not provide specific numeric PD parameters (e.g., slope, intercept, Emax) or detailed concentration-effect data in the abstract. |
| popPK | Nagar_2024 | irrelevant | 0 | 0 | The paper is a methodological study on PBPK frameworks using general drug classes (acids/bases) or non-specific examples, with no specific data for eletriptan. |
| PD | Nagar_2024 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic (PBPK) modeling for clearance prediction and does not report any pharmacodynamic or exposure-response relationships for eletriptan. |
| popPK | Nallapeta_2026 | irrelevant | 2 | 0 | The study focuses on microneedle formulation, in vitro release kinetics, and behavioral pharmacodynamics, without reporting quantitative population pharmacokinetic parameters (CL, V, ka) for eletriptan. |
| PGx | Nallapeta_2026 | not_relevant | 0 | 0 | The paper focuses on formulation and delivery systems (nanoparticles/microneedles) and does not investigate genetic variants or their effect on pharmacokinetics or pharmacodynamics. |
| popPK | Ohk_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sumatriptan, not eletriptan. |
| PD | Ohk_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of sumatriptan and explicitly states that a PK/PD model was not established, providing no pharmacodynamic data or parameters. |
| popPK | Pascual_2007 | irrelevant | 1 | 0 | The paper is a systematic review of efficacy and tolerability in migraine patients, not a pharmacokinetic study, and it provides no quantitative PK parameters (CL, V, ka, etc.) for eletriptan. |
| popPK | Patel_2017 | relevant | 8 | 3 | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, T1/2) for eletriptan in rats, but the specific numeric values are not explicitly listed in the provided abstract text. |
| popPK | Patel_2019 | relevant | 8 | 4 | Study reports non-compartmental PK parameters (Cmax, AUC) for eletriptan in rats, but lacks specific clearance/volume values and compartmental modeling required for population-PK extraction. |
| PGx | Patel_2019 | not_relevant | 0 | 0 | The paper investigates a pharmacokinetic drug-drug interaction with a CYP3A4 inhibitor, not a pharmacogenomic effect of a gene variant. |
| PGx | Pichard-Garcia_2000 | not_relevant | 0 | 0 | The paper evaluates CYP3A4 induction potential in hepatocytes, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of eletriptan. |
| popPK | Safhi_2023 | relevant | 8 | 4 | The paper reports in vivo PK parameters (Cmax, AUC, t1/2) for eletriptan, but specific values for clearance, volume, and half-life are not explicitly listed in the text provided, only Cmax comparisons. |
| popPK | Sakai_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters for eletriptan. |
| PD | Sakai_2004 | not_relevant | 3 | 2 | The paper reports dose-response trends for efficacy (headache response rates) and adverse events but does not provide a formal PK/PD model, concentration-effect analysis, or specific numeric PD parameters like Emax or EC50. |
| popPK | Sandrini_2006 | irrelevant | 1 | 0 | This is a review article that discusses eletriptan's pharmacokinetic profile qualitatively without reporting specific quantitative parameter values or models. |
| PD | Sandrini_2006 | not_relevant | 1 | 0 | The text is a general review summarizing clinical efficacy and safety without providing specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data. |
| popPK | Sandrini_2009 | irrelevant | 0 | 0 | The text is a qualitative summary of clinical efficacy and tolerability without reporting any quantitative pharmacokinetic parameters such as clearance or volume. |
| popPK | Schoenen_1997 | irrelevant | 0 | 0 | The paper is a review of acute migraine therapies that mentions eletriptan but provides no quantitative pharmacokinetic parameters or disposition data. |
| popPK | Shah_2002 | relevant | 7 | 4 | The study reports key pharmacokinetic parameters for eletriptan (tmax, half-life) in humans, but specific numeric values for clearance (CL) or volume of distribution (V) are not explicitly provided in the extracted text. |
| popPK | Shelke_2016 | irrelevant | 1 | 0 | The study is a formulation development paper reporting in vitro/ex vivo release and permeation data, not a pharmacokinetic study with quantitative disposition parameters (CL, V, etc.). |
| popPK | Siddique_2022 | irrelevant | 2 | 8 | The study reports non-compartmental PK parameters (half-life, AUC, Cmax) for a new buccal film formulation in rabbits, but lacks the specific clearance, volume of distribution, or compartmental/population model parameters required for extraction. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug interaction prevalence and does not report pharmacokinetic parameters for eletriptan. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and contains no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for eletriptan. |
| popPK | Sternieri_2006 | irrelevant | 2 | 0 | This is a review article discussing drug-drug interactions and general pharmacokinetic principles for headache medications, with no original quantitative disposition parameters for eletriptan provided in the text. |
| PGx | Sternieri_2006 | not_relevant | 0 | 0 | The paper is a general review of drug-drug interactions in headache medications and does not discuss pharmacogenomics or gene variants affecting the PK/PD of eletriptan. |
| popPK | Sun_2013 | irrelevant | 2 | 0 | The paper is a systematic review that summarizes trial data qualitatively, stating that PK profiles were "statistically similar," but does not provide specific quantitative disposition parameters (e.g., clearance, volume) for eletriptan in the provided text. |
| popPK | Sutherland_2023 | irrelevant | 0 | 0 | The paper is an in vitro secondary pharmacology resource study focused on adverse drug reactions and off-target activities, not pharmacokinetics or disposition parameters. |
| PD | Sutherland_2023 | not_relevant | 0 | 0 | The paper is a database resource for in vitro secondary pharmacology and ADR prediction; it does not report in vivo PK/PD modeling or specific exposure-response parameters for eletriptan. |
| popPK | Takiya_2006 | irrelevant | 2 | 0 | This is a literature review summarizing pharmacokinetic properties qualitatively without providing specific numeric disposition parameter values. |
| PD | Takiya_2006 | not_relevant | 1 | 0 | The text is a narrative review summarizing general pharmacokinetic and clinical efficacy data without providing specific numeric PD parameters, concentration-effect curves, or dose-response models. |
| PGx | Tepper_2001 | not_relevant | 2 | 5 | The paper discusses drug-drug interactions with CYP3A4 and p-glycoprotein inhibitors for eletriptan, but does not report effects of specific gene variants/genotypes on PK or PD parameters. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 2 | 0 | This is a comparative review of triptans that mentions eletriptan's half-life qualitatively in the context of efficacy, but it does not report quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model for eletriptan. |
| PD | Tfelt-Hansen_2000 | not_relevant | 2 | 1 | The text is a comparative review that lists clinical efficacy outcomes (therapeutic gain percentages) for different doses but does not report a pharmacodynamic model, concentration-effect relationship, or numeric PD parameters like Emax or EC50. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 1 | 0 | This is a review of clinical efficacy and therapeutic delay, not a PK study, and it contains no quantitative disposition parameters (CL, V, Ka) for eletriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing time to maximum effect (Emax) with Tmax, but it does not provide numeric concentration-effect parameters (like EC50 or slope) or a quantitative PD model for eletriptan. |
| popPK | Tokuoka_2014 | irrelevant | 2 | 2 | The study is a retrospective pharmacodynamic analysis of receptor occupancy and clinical efficacy, not a primary pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life for eletriptan. |
| popPK | Tokuoka_2015 | irrelevant | 1 | 0 | This is a theoretical analysis of receptor occupancy and headache recurrence that cites PK data (like half-life) from other studies rather than reporting original quantitative disposition parameters or models for eletriptan. |
| popPK | Valetti_2022 | irrelevant | 0 | 0 | The study focuses on in vitro and ex vivo transmucosal delivery and permeation, reporting flux and permeability coefficients rather than systemic pharmacokinetic disposition parameters like clearance or volume. |
| popPK | unknown_2002 | irrelevant | 2 | 0 | The paper is a clinical efficacy trial that mentions PK evaluations but does not report quantitative disposition parameters (CL, V, ka, etc.) for eletriptan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
