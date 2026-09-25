<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;reboxetine&quot;}]"></div>

# reboxetine

- **generic name:** reboxetine
- **ATC codes:** `N06AX18`
- **DrugBank:** [DB00234](https://go.drugbank.com/drugs/DB00234)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Reboxetine is an antidepressant drug used in the treatment of clinical depression, panic disorder and ADD/ADHD. Its mesylate (i.e. methanesulfonate) salt is sold under tradenames including Edronax, Norebox, Prolift, Solvex, Davedax or Vestra. Reboxetine has two chiral centers, but it only exists as two enantiomers, (R,R)-(-)- and (S,S)-(+)-reboxetine.

**Indication.** For the treatment of clinical depression.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 04:36 | 25:01 | 0/0/0 | 0/0/0 | 0/0/0 | 76,961/3,572 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/7 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=reboxetine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 94 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pellizzoni_1996.pdf` | Pellizzoni C et al., Pharmacokinetics of reboxetine in healt…, Biopharmaceutics & drug dis… (1996) | popPK | 8 | [10.1002/(SICI)1099-081X(199610)17:7&lt;623::AID-BDD978&gt;3.0.CO;2-S](https://doi.org/10.1002/(SICI)1099-081X(199610)17:7<623::AID-BDD978>3.0.CO;2-S) | [8894119](https://pubmed.ncbi.nlm.nih.gov/8894119) | The paper is a relevant PK study for reboxetine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only describes the study design and qualitative outcomes. |
| `Fossa_2012.pdf` | Fossa AA et al., Improved preclinical cardiovascular the…, Toxicology and applied phar… (2012) | pd | 5 | [10.1016/j.taap.2012.09.010](https://doi.org/10.1016/j.taap.2012.09.010) | [23000177](https://www.ncbi.nlm.nih.gov/pubmed/23000177) | metadata signals extractable PD data (exposure-response) |
| `Caccia_1998.pdf` | Caccia S, Metabolism of the newer antidepressants…, Clinical pharmacokinetics (1998) | pgx | 8 | [10.2165/00003088-199834040-00002](https://doi.org/10.2165/00003088-199834040-00002) | [9571301](https://www.ncbi.nlm.nih.gov/pubmed/9571301) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kuhn_2007.pdf` | Kuhn UD et al., Reboxetine and cytochrome P450--compari…, International journal of cl… (2007) | pgx | 8 | [10.5414/cpp45036](https://doi.org/10.5414/cpp45036) | [17256449](https://www.ncbi.nlm.nih.gov/pubmed/17256449) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fleishaker_2000.pdf` | Fleishaker JC, Clinical pharmacokinetics of reboxetine…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039060-00003](https://doi.org/10.2165/00003088-200039060-00003) | [11192474](https://www.ncbi.nlm.nih.gov/pubmed/11192474) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Italiano_2014.pdf` | Italiano D et al., Pharmacokinetic and pharmacodynamic int…, Expert opinion on drug meta… (2014) | pgx | 7 | [10.1517/17425255.2014.956081](https://doi.org/10.1517/17425255.2014.956081) | [25196459](https://www.ncbi.nlm.nih.gov/pubmed/25196459) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_2003.pdf` | Spina E et al., Metabolic drug interactions with new ps…, Fundamental & clinical phar… (2003) | pgx | 7 | [10.1046/j.1472-8206.2003.00193.x](https://doi.org/10.1046/j.1472-8206.2003.00193.x) | [14703714](https://www.ncbi.nlm.nih.gov/pubmed/14703714) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Spina_2008.pdf` | Spina E et al., Clinically relevant pharmacokinetic dru…, Clinical therapeutics (2008) | pgx | 7 | [10.1016/s0149-2918(08)80047-1](https://doi.org/10.1016/s0149-2918(08)80047-1) | [18691982](https://www.ncbi.nlm.nih.gov/pubmed/18691982) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Spina_2012.pdf` | Spina E et al., Clinically significant drug interaction…, CNS drugs (2012) | pgx | 7 | [10.2165/11594710-000000000-00000](https://doi.org/10.2165/11594710-000000000-00000) | [22171584](https://www.ncbi.nlm.nih.gov/pubmed/22171584) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Avenoso_1999.pdf` | Avenoso A et al., No effect of the new antidepressant reb…, Therapeutic drug monitoring (1999) | pgx | 5 | [10.1097/00007691-199910000-00015](https://doi.org/10.1097/00007691-199910000-00015) | [10519458](https://www.ncbi.nlm.nih.gov/pubmed/10519458) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-24T04:31:13.939096+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arauz_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic exercise performance trial where reboxetine is used as a pharmacological agent to manipulate noradrenaline signaling, and no pharmacokinetic parameters are reported. |
| popPK | Arenales_2026 | irrelevant | 0 | 0 | The study is a behavioral and neurophysiological investigation of cognitive control where reboxetine is used as a pharmacological agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Arias_2013 | irrelevant | 0 | 0 | The paper is a mechanistic study on receptor binding and inhibition, not a pharmacokinetic study, and contains no disposition parameters. |
| PGx | Avenoso_1999 | not_relevant | 0 | 0 | The study investigates the effect of reboxetine on CYP2D6 activity (drug-drug interaction) in a homogeneous population of extensive metabolizers, rather than how a genetic variant affects reboxetine's PK/PD. |
| PD | Baker_2002 | not_relevant | 1 | 0 | The paper is a review discussing the general relevance of chirality to drug development and mentions reboxetine only as an example of a chiral antidepressant, without providing specific numeric PD parameters or exposure-response data. |
| popPK | Benson_2010 | irrelevant | 0 | 0 | The study reports in-vitro binding kinetics (kon, koff, Kd) to hNET, not in-vivo pharmacokinetic disposition parameters (CL, V, ka). |
| PD | Benson_2010 | not_relevant | 0 | 0 | The paper reports in vitro binding kinetics (Kd, kon, koff) to the hNET transporter, which are pharmacological binding parameters, not pharmacodynamic (exposure-response or dose-response) parameters describing a physiological or clinical effect. |
| PGx | Blakely_2001 | not_relevant | 0 | 0 | The paper is a review of genetic variants in serotonin and norepinephrine transporters and their physiological roles, but it does not report any pharmacokinetic or pharmacodynamic data for reboxetine. |
| PD | Borowicz_2014 | not_relevant | 3 | 2 | The study reports qualitative dose-dependent effects (threshold changes) and confirms pharmacodynamic interactions via unchanged brain concentrations, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| PGx | Caccia_1998 | not_relevant | 0 | 0 | The paper is a general review of antidepressant metabolism and explicitly states that information on the isoenzymes involved in reboxetine's biotransformation is minimal, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Cheng_2020 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of antidepressant efficacy (clinical outcomes) and does not report any pharmacokinetic parameters for reboxetine. |
| PD | Cheng_2020 | not_relevant | 2 | 1 | The paper is a meta-analysis that explicitly states no significant dose-response relationship was observed for the antidepressants, and it does not provide specific numeric PD parameters (like Emax or EC50) for reboxetine. |
| PD | DeVane_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing pharmacological characteristics and does not provide specific numeric PD parameters or exposure-response data for reboxetine. |
| PGx | De_2012 | not_relevant | 0 | 0 | The paper is a general review of ADHD drug therapy and does not report specific pharmacogenomic effects on reboxetine PK/PD parameters. |
| PD | Di_2017 | not_relevant | 1 | 0 | The text is a review article focusing on the mechanism of action of alpha-2 adrenoceptor modulators for neuropathic pain and does not report any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters for reboxetine. |
| PD | Dostert_1997 | not_relevant | 1 | 0 | The text is a review of pharmacokinetics and metabolism that only qualitatively mentions pharmacodynamic properties (potency, receptor affinity) without providing any numeric PD parameters or exposure-response data. |
| PD | Eisensamer_2005 | not_relevant | 2 | 0 | The paper investigates the mechanism of noncompetitive inhibition via lipid raft enrichment and reports qualitative associations between drug concentration in membrane fractions and inhibitory potency, but it does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for reboxetine. |
| popPK | Fleishaker_2000 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The paper describes the general clinical pharmacokinetics of reboxetine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Fossa_2012 | not_relevant | 3 | 2 | The paper describes qualitative exposure-response trends and specific fold-changes in NE levels but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for reboxetine. |
| popPK | Grandoso_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuronal firing rates in rat brain slices, not a pharmacokinetic study reporting disposition parameters. |
| PD | Hay_2008 | not_relevant | 1 | 0 | The text is a systematic review summary that lists reboxetine as an intervention but provides no pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| PD | Hay_2010 | not_relevant | 1 | 0 | The paper is a systematic review of clinical outcomes for bulimia nervosa treatments and does not report any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for reboxetine. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for reboxetine. |
| PGx | Helland_2007 | not_relevant | 2 | 5 | The paper reports low reboxetine concentrations due to CYP3A4 enzyme induction (drug-drug interaction), not a genetic variant or pharmacogenomic effect. |
| PGx | Hodgson_2014 | not_relevant | 0 | 0 | The paper investigates genetic predictors of adverse drug reactions (side effects) rather than pharmacokinetic or pharmacodynamic parameters of reboxetine. |
| PD | Italiano_2014 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Italiano_2014 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions between antiepileptics and antidepressants, not a study on pharmacogenomic effects of reboxetine. |
| PGx | Jastrzębska-Więsek_2018 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics and behavioral effects of EMD386088 and its interaction with reboxetine in rats, but does not report any pharmacogenomic effects (gene variants) on reboxetine's PK or PD parameters. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of evogliptin, not reboxetine. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper reports a PD model for evogliptin, not reboxetine. |
| PD | Kreiner_2019 | not_relevant | 2 | 1 | The study reports qualitative behavioral and histological improvements with a fixed dose of reboxetine but does not provide plasma/tissue concentration data or fit a dose-response curve to derive numeric PD parameters like Emax or EC50. |
| PGx | Kuhn_2007 | not_relevant | 0 | 0 | The study explicitly reports that reboxetine pharmacokinetics showed no correlation with CYP2D6 or CYP3A4 phenotypes/genotypes. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The study focuses on atomoxetine, buspirone, and novel compounds (PF-04269339, PF-03529936), not reboxetine. |
| PD | Li_2012 | not_relevant | 0 | 0 | The paper focuses on atomoxetine, buspirone, and novel compounds (PF-04269339, PF-03529936), not reboxetine. |
| popPK | Mangas-Sanjuan_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of axomadol, not reboxetine. |
| PD | Mangas-Sanjuan_2016 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for axomadol, not reboxetine. |
| PD | Miziak_2022 | not_relevant | 2 | 1 | The paper is a review of pharmacodynamic interactions in animal models (mice) and does not report a formal exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for reboxetine in humans or a derivable concentration-effect curve. |
| PD | Newton_2011 | not_relevant | 1 | 0 | The text is a brief editorial summary of a study by Hysek et al. and does not contain the full data, numeric PD parameters, or concentration-effect curves required for extraction. |
| PD | Ohman_2003 | not_relevant | 3 | 2 | The paper reports pharmacokinetic variability and a qualitative estimation of NARI activity based on enantiomer ratios, but it does not provide a quantitative exposure-response model or numeric PD parameters (e.g., Emax, EC50) for reboxetine. |
| PD | Palleria_2020 | not_relevant | 1 | 0 | The paper is a narrative review of drug-drug interactions and contains no original data, concentration-effect curves, or numeric PD parameters for reboxetine. |
| popPK | Pellizzoni_1996 | relevant | 8 | 2 | The paper is a relevant PK study for reboxetine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only describes the study design and qualitative outcomes. |
| PD | Schreiber_2023 | not_relevant | 2 | 0 | The paper describes a qualitative finding that reboxetine induced a weak antinociceptive effect with no significant opioid involvement, but it does not provide numeric dose-response parameters, concentration-effect curves, or PD model fits for reboxetine. |
| PGx | Spina_2003 | not_relevant | 0 | 0 | The paper discusses metabolic drug interactions and CYP inhibition profiles but does not report any pharmacogenomic effects (gene variants) on reboxetine's PK or PD parameters. |
| PGx | Spina_2008 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition) and does not report pharmacogenomic effects (gene variants) on reboxetine PK/PD. |
| PGx | Spina_2012 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions (CYP450 inhibition/induction) and does not report pharmacogenomic effects (gene variants) on reboxetine PK/PD. |
| PD | Szopa_2018 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic interactions and dose-response trends for DPCPX, but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for reboxetine. |
| PGx | Thomas_2008 | not_relevant | 0 | 0 | The paper is a protocol for a clinical trial investigating treatment response (clinical efficacy) and does not report pharmacokinetic or pharmacodynamic parameters. |
| popPK | Usall_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for schizophrenia and does not report any pharmacokinetic parameters for reboxetine. |
| PD | Wen_2025 | not_relevant | 4 | 2 | The paper performs a dose-response meta-analysis for reboxetine, but the results are explicitly stated as "not statistically significant," and no numeric PD parameters (e.g., slope, Emax, specific dose-effect curve coefficients) are provided in the text to derive a relationship. |
| PGx | Wienkers_1999 | not_relevant | 0 | 0 | The study investigates in vitro CYP enzyme involvement in reboxetine metabolism but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| PD | Zhou_2025 | not_relevant | 3 | 2 | The paper is a network meta-analysis that qualitatively describes dose-response trends (e.g., linear increase for reboxetine) but does not provide specific numeric PD parameters (like EC50 or Emax) or extractable concentration-effect curves for reboxetine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
