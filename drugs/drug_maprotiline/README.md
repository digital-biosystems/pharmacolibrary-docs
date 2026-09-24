<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;maprotiline&quot;}]"></div>

# maprotiline

- **generic name:** maprotiline
- **ATC codes:** `N06AA21`
- **DrugBank:** [DB00934](https://go.drugbank.com/drugs/DB00934)
- **groups:** approved

## About

**Description.** Maprotiline is a tetracyclic antidepressant with similar pharmacological properties to tricyclic antidepressants (TCAs). Similar to TCAs, maprotiline inhibits neuronal norepinephrine reuptake, possesses some anticholinergic activity, and does not affect monoamine oxidase activity. It differs from TCAs in that it does not appear to block serotonin reuptake. Maprotiline may be used to treat depressive affective disorders, including dysthymic disorder (depressive neurosis) and major depressive disorder. Maprotiline is effective at reducing symptoms of anxiety associated with depression.

**Indication.** For treatment of depression, including the depressed phase of bipolar depression, psychotic depression, and involutional melancholia, and may also be helpful in treating certain patients suffering severe depressive neurosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 00:01 | 25:26 | 0/0/0 | 0/1/0 | 0/0/0 | 151,740/8,868 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 5/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Okada_2013](drugs/drug_maprotiline/pd_Okada_2013_I_K_ACh.md) | Okada M et al., Inhibitory effects of psychotropic drug…, The Journal of veterinary m… (2013) | [10.1292/jvms.12-0511](https://doi.org/10.1292/jvms.12-0511) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=maprotiline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Slowly, but completely absorbed from the GI tract following oral administration.…”</sub> | prose |
| distribution | blood | `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…conjugated metabolites within 21 days; 30% is eliminated in feces.…”</sub> | prose |
| excretion | kidney | <sub>“…ely 60% of a single orally administered dose is excreted in urine as conjugated metabolite…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), DRD2 (binder), HRH1 (target), HTR2A (binder), HTR2C (binder), HTR7 (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 76 matched, 58 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Flühler_1984.pdf` | Flühler H et al., Experiences in the application of NONME…, Drug metabolism reviews (1984) | popPK | 9 | [10.3109/03602538409015069](https://doi.org/10.3109/03602538409015069) | [6547665](https://pubmed.ncbi.nlm.nih.gov/6547665) | The paper describes a population pharmacokinetic study of maprotiline using NONMEM, but the provided evidence contains only the abstract and no specific numeric parameter values. |
| `Miyake_1992.pdf` | Miyake K et al., Pharmacokinetic analysis of maprotiline…, Journal of pharmaceutical s… (1992) | popPK | 9 | [10.1002/jps.2600811016](https://doi.org/10.1002/jps.2600811016) | [1432616](https://pubmed.ncbi.nlm.nih.gov/1432616) | The study is a relevant animal PK study for maprotiline, but the evidence only provides bioavailability and metabolite fractions, lacking the specific clearance, volume, or rate constant values required for extraction. |
| `Aboukaoud_2026.pdf` | Aboukaoud M et al., A pharmacometric framework for norepine…, Journal of psychopharmacolo… (2026) | pd | 5 | [10.1177/02698811261470450](https://doi.org/10.1177/02698811261470450) | [42549822](https://www.ncbi.nlm.nih.gov/pubmed/42549822) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Ferrer-Villada_2006.pdf` | Ferrer-Villada T et al., Inhibition of cardiac HERG potassium ch…, European journal of pharmac… (2006) | pd | 4 | [10.1016/j.ejphar.2005.10.036](https://doi.org/10.1016/j.ejphar.2005.10.036) | [16423345](https://www.ncbi.nlm.nih.gov/pubmed/16423345) | metadata signals extractable PD data (IC50) |
| `Hirao_2018.pdf` | Hirao R et al., Compound action potential inhibition pr…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejphar.2017.11.047](https://doi.org/10.1016/j.ejphar.2017.11.047) | [29203420](https://www.ncbi.nlm.nih.gov/pubmed/29203420) | metadata signals extractable PD data (IC50) |
| `Laruelle_1993.pdf` | Laruelle M et al., SPECT imaging of dopamine and serotonin…, Synapse (New York, N.Y.) (1993) | pd | 4 | [10.1002/syn.890130402](https://doi.org/10.1002/syn.890130402) | [7683143](https://www.ncbi.nlm.nih.gov/pubmed/7683143) | metadata signals extractable PD data (IC50) |
| `Obach_2004.pdf` | Obach RS et al., Human liver aldehyde oxidase: inhibitio…, Journal of clinical pharmac… (2004) | pd | 4 | [10.1177/0091270003260336](https://doi.org/10.1177/0091270003260336) | [14681337](https://www.ncbi.nlm.nih.gov/pubmed/14681337) | metadata signals extractable PD data (IC50) |
| `Silver_1986.pdf` | Silver PJ et al., Antidepressants and protein kinases: in…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90393-6](https://doi.org/10.1016/0014-2999(86)90393-6) | [2869958](https://www.ncbi.nlm.nih.gov/pubmed/2869958) | metadata signals extractable PD data (IC50) |
| `Vormfelde_1997.pdf` | Vormfelde SV et al., Non-response to maprotiline caused by u…, European journal of clinica… (1997) | pgx | 8 | [10.1007/s002280050306](https://doi.org/10.1007/s002280050306) | [9272409](https://www.ncbi.nlm.nih.gov/pubmed/9272409) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Brachtendorf_2002.pdf` | Brachtendorf L et al., Cytochrome P450 enzymes contributing to…, Pharmacology & toxicology (2002) | pgx | 7 | [10.1034/j.1600-0773.2002.900306.x](https://doi.org/10.1034/j.1600-0773.2002.900306.x) | [12071336](https://www.ncbi.nlm.nih.gov/pubmed/12071336) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-23T23:56:31.337269+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aboukaoud_2026 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | Aboukaoud_2026 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters for maprotiline. |
| popPK | Arita_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel inhibition and binding in bovine cells, not a pharmacokinetic study reporting disposition parameters for maprotiline. |
| PGx | Baumann_1986 | not_relevant | 3 | 0 | The paper discusses maprotiline only in a general context, stating that a deficiency in debrisoquine metabolism does not necessarily mean high levels of maprotiline, and provides no specific data or quantitative effect sizes for maprotiline. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes an in-silico method for identifying synergistic drug combinations in vitro and does not report pharmacokinetic parameters for maprotiline. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on a machine learning method for identifying synergistic drug combinations in vitro and does not report specific pharmacodynamic or exposure-response parameters for maprotiline. |
| PGx | Brachtendorf_2002 | not_relevant | 2 | 0 | The paper identifies CYP2D6 and CYP1A2 as enzymes metabolizing maprotiline using pooled liver microsomes, but it does not report pharmacokinetic or pharmacodynamic parameters stratified by specific genotypes or phenotypes. |
| popPK | Brust_2003 | irrelevant | 0 | 0 | The study focuses on the PET imaging of serotonin transporter radioligands in pigs, and maprotiline is used only as a non-specific control agent to demonstrate lack of binding, with no pharmacokinetic parameters reported for it. |
| popPK | Byrne_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel compounds structurally related to maprotiline, with no pharmacokinetic parameters reported for maprotiline itself. |
| popPK | Cavero_1980 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor effects in rats and does not report any pharmacokinetic parameters for maprotiline. |
| PD | Cavero_1980 | not_relevant | 2 | 1 | The paper reports qualitative cardiovascular effects and relative potency comparisons (e.g., phentolamine 34x more potent than mianserin) but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for maprotiline. |
| popPK | Di_2017 | irrelevant | 0 | 0 | The paper is a review of pharmacological mechanisms for neuropathic pain and does not report any quantitative pharmacokinetic parameters for maprotiline. |
| PD | Di_2017 | not_relevant | 1 | 0 | The text is a review article discussing maprotiline as a norepinephrine reuptake inhibitor without providing any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| PGx | Eugene_2020 | not_relevant | 0 | 0 | The study analyzes adverse drug reaction reporting odds for somnolence based on receptor binding affinities, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Ferrer-Villada_2006 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| popPK | Flühler_1984 | relevant | 9 | 0 | The paper describes a population pharmacokinetic study of maprotiline using NONMEM, but the provided evidence contains only the abstract and no specific numeric parameter values. |
| PD | Flühler_1984 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling methods (NONMEM vs. naive) for maprotiline and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Gundert-Remy_1983 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic interactions (blood pressure, heart rate) rather than pharmacokinetic disposition parameters for maprotiline. |
| PD | Gundert-Remy_1983 | not_relevant | 2 | 0 | The study reports qualitative findings of no interaction and compares maximal responses, but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (like Emax or EC50) for maprotiline. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of dose equivalence in clinical trials and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for maprotiline. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalences based on clinical trial outcomes but does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for maprotiline. |
| popPK | Hirao_2018 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of nerve conduction inhibition, not a pharmacokinetic study, and reports no disposition parameters for maprotiline. |
| popPK | Hoertel_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on antidepressant use and mortality in COVID-19 patients, not a pharmacokinetic study, and maprotiline is only mentioned as a comparator for FIASMA activity without any PK parameters. |
| PD | Hoertel_2022 | not_relevant | 0 | 0 | The paper is an observational epidemiological study analyzing mortality outcomes in SARS-CoV-2 patients; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for maprotiline. |
| popPK | Hsu_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling and cell proliferation, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Hsu_2004_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling and cell viability, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hsu_2004_3 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in neuroblastoma cells and does not report pharmacokinetic parameters for maprotiline. |
| popPK | Istikoglou_2010 | irrelevant | 0 | 0 | The paper is a historical review of St. John's Wort and mentions maprotiline only as a comparator for therapeutic efficacy, providing no pharmacokinetic data. |
| PD | Istikoglou_2010 | not_relevant | 0 | 0 | The paper is a historical review of Hypericum Perforatum and only qualitatively mentions maprotiline as a comparator without providing any pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Kiesecker_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of hERG channel blockade and does not report any pharmacokinetic disposition parameters for maprotiline. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper is a neuroprotective compound screen in zebrafish and does not report pharmacokinetic parameters for maprotiline. |
| PD | Kim_2022 | not_relevant | 0 | 0 | The paper describes a high-throughput screening assay in zebrafish for neuroprotective compounds and does not report any pharmacodynamic or exposure-response analysis for maprotiline. |
| popPK | Lancaster_1989 | irrelevant | 0 | 0 | The paper is a review of dothiepin, and maprotiline is only mentioned as a comparator drug without any specific pharmacokinetic parameters provided. |
| PD | Lancaster_1989 | not_relevant | 1 | 0 | The text is a qualitative review of dothiepin that mentions maprotiline only for therapeutic comparison, without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Lancaster_1989_2 | irrelevant | 0 | 0 | The paper is a review of lofepramine, and maprotiline is only mentioned as a comparator for therapeutic efficacy without any pharmacokinetic data. |
| PD | Lancaster_1989_2 | not_relevant | 1 | 0 | The text is a qualitative review of lofepramine that mentions maprotiline only for comparative efficacy, without providing any numeric PD parameters or exposure-response data for maprotiline. |
| popPK | Laruelle_1993 | irrelevant | 0 | 0 | The study is a SPECT imaging characterization of a radiotracer in nonhuman primates where maprotiline is used only as a negative control for displacement, with no pharmacokinetic parameters reported. |
| PD | Laruelle_1993 | not_relevant | 0 | 0 | The paper reports that maprotiline did not affect [123I]beta-CIT uptake, providing no numeric PD parameters or dose-response relationship for maprotiline. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor interactions in rat jejunum, not a pharmacokinetic study reporting disposition parameters for maprotiline. |
| popPK | Martényi_2001 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing antidepressant outcomes, not a pharmacokinetic study, and contains no PK parameters for maprotiline. |
| PD | Martényi_2001 | not_relevant | 0 | 0 | The paper reports clinical efficacy differences based on gender and age but does not provide any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters for maprotiline. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antiproliferative effects of ethanoanthracene compounds in leukemia cell lines and does not involve maprotiline or pharmacokinetic parameters. |
| PD | McKeown_2024 | not_relevant | 0 | 0 | The paper studies novel ethanoanthracene compounds in CLL cell lines and does not mention maprotiline or report any pharmacodynamic data for it. |
| popPK | Menargues_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of alpha 2-adrenoceptor modulation in rats, not a pharmacokinetic study, and contains no disposition parameters for maprotiline. |
| PD | Menargues_1990 | not_relevant | 3 | 2 | The paper reports qualitative ranking of mydriatic effects and general dose-response shifts for clonidine, but does not provide specific numeric PD parameters (EC50, Emax) for maprotiline itself. |
| popPK | Milne_1991 | irrelevant | 0 | 0 | The paper is a review of citalopram, and maprotiline is only mentioned as a comparator drug without any specific pharmacokinetic parameters reported for it. |
| PD | Milne_1991 | not_relevant | 0 | 0 | The text is a review of citalopram and only mentions maprotiline as a comparator for efficacy without providing any pharmacodynamic or exposure-response data for maprotiline. |
| popPK | Miyake_1992 | relevant | 9 | 2 | The study is a relevant animal PK study for maprotiline, but the evidence only provides bioavailability and metabolite fractions, lacking the specific clearance, volume, or rate constant values required for extraction. |
| popPK | Mochizuki_2002 | irrelevant | 0 | 0 | The study focuses on the neurochemical and behavioral characterization of milnacipran, with maprotiline serving only as a comparator in behavioral tests without any pharmacokinetic parameter reporting. |
| PD | Mochizuki_2002 | not_relevant | 0 | 0 | The paper focuses on milnacipran; maprotiline is only mentioned as a comparator in behavioral tests without any reported exposure-response or dose-response analysis or numeric PD parameters. |
| popPK | Moret_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of 5-HT autoreceptors using rat hypothalamic slices, and maprotiline is used only as a comparator agent with no pharmacokinetic parameters reported. |
| PD | Moret_1988 | not_relevant | 0 | 0 | The paper investigates 5-HT autoreceptor sensitivity in rat hypothalamic slices and mentions maprotiline only to state that it did not modify the effect of LSD, without providing any concentration-effect data or PD parameters for maprotiline. |
| popPK | Muraoka_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling in cell lines, not a pharmacokinetic study, and maprotiline is only a comparator agent. |
| PD | Muraoka_1998 | not_relevant | 0 | 0 | The paper studies the effect of imipramine on 5-HT2A receptor function in cell lines and only mentions maprotiline qualitatively as having a similar effect, without providing any numeric PD parameters or exposure-response data for maprotiline. |
| popPK | Obach_2004 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme inhibition study where maprotiline is tested as an inhibitor of aldehyde oxidase, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Obach_2004 | not_relevant | 3 | 2 | The paper reports enzyme inhibition (IC50) for aldehyde oxidase, which is a pharmacokinetic/metabolic parameter, not a pharmacodynamic exposure-response relationship for the drug's clinical effect. |
| popPK | Okada_2013 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring IC50 values for potassium current inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Pisani_2023 | irrelevant | 0 | 0 | The paper is a review discussing the use of maprotiline in epilepsy patients and does not report any quantitative pharmacokinetic parameters. |
| PD | Pisani_2023 | not_relevant | 0 | 0 | The text is a qualitative review discussing the risk of seizures with maprotiline but provides no numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | Shimizu_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor signaling in astrocytes and does not report pharmacokinetic parameters for maprotiline. |
| PD | Shimizu_1996 | not_relevant | 1 | 0 | The paper reports a qualitative observation that chronic maprotiline exposure mimics the effect of mianserin on 5-HT7 receptor activity, but it does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for maprotiline itself. |
| popPK | Silver_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on protein kinase inhibition and does not report any pharmacokinetic parameters for maprotiline. |
| PD | Silver_1986 | not_relevant | 1 | 0 | The paper reports that maprotiline was ineffective at a single concentration (100 microM) and does not provide numeric PD parameters (like IC50) or a dose-response curve for it. |
| popPK | Socała_2017 | irrelevant | 1 | 0 | The study is a behavioral pharmacology experiment in mice that measures drug concentrations to rule out pharmacokinetic interactions, but it does not report quantitative PK parameters (CL, V, t1/2) for maprotiline. |
| PD | Socała_2017 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic interactions (enhanced effect) and concentration changes but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve for maprotiline. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for maprotiline. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug dispensing data to estimate the prevalence of drug-drug interactions; it contains no pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for maprotiline. |
| PGx | Spigset_1997 | not_relevant | 2 | 0 | The study investigates the association between CYP2D6/2C19 genotypes and the incidence of seizures/myoclonus (adverse events), not the direct effect of genotype on specific pharmacokinetic or pharmacodynamic parameters of maprotiline. |
| PGx | Sreter_2017 | not_relevant | 2 | 0 | The paper is a case report describing adverse drug reactions (rhabdomyolysis and Ogilvie's syndrome) and mentions retrospective pharmacogenetic testing, but it does not report specific quantitative changes in PK or PD parameters of maprotiline linked to a specific gene variant. |
| popPK | Sudoh_2003 | irrelevant | 0 | 0 | The study investigates the local anesthetic efficacy of maprotiline in rats and does not report any pharmacokinetic parameters. |
| PD | Sudoh_2003 | not_relevant | 2 | 1 | The paper reports qualitative efficacy (complete vs. no blockade) and compares in vitro IC50 values for a different target (Nav1.5), but does not provide a quantitative concentration-effect curve or numeric PD parameters (like Emax or EC50) for the in vivo local anesthetic effect of maprotiline. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on Nav1.7 channel inhibition where maprotiline is used only as a structural lead/comparator, and no pharmacokinetic parameters are reported. |
| PD | Wang_2020 | not_relevant | 0 | 0 | The paper focuses on the discovery of a new compound (10o) and only mentions maprotiline as a known inhibitor in the introduction/figures without providing specific PD parameters or dose-response data for maprotiline itself. |
| popPK | Wilde_1995 | irrelevant | 0 | 0 | The paper is a review of tianeptine, and maprotiline is only mentioned as a comparator drug without any quantitative pharmacokinetic parameters provided. |
| PD | Wilde_1995 | not_relevant | 0 | 0 | The paper is a review of tianeptine and does not report any pharmacodynamic or exposure-response data for maprotiline. |
| popPK | Zahradník_2008 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of calcium channel inhibition, not a pharmacokinetic study, and reports no disposition parameters for maprotiline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
