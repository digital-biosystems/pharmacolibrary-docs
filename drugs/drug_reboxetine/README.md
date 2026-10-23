<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;reboxetine&quot;}]"></div>

# reboxetine

- **generic name:** reboxetine
- **ATC codes:** `N06AX18`
- **DrugBank:** [DB00234](https://go.drugbank.com/drugs/DB00234) · **PubChem:** [CID 127151](https://pubchem.ncbi.nlm.nih.gov/compound/127151)
- **molar mass:** 313.397 g/mol (C19H23NO3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Reboxetine is an antidepressant, once used to treat depression. It has been withdrawn from use, with regulatory records marking it as withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72506458](https://www.wikidata.org/wiki/Q72506458) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Arias_2013_Ca2_influx](drugs/drug_reboxetine/pd_Arias_2013_Ca2_influx.md) | (±)-epibatidine-induced Ca2+ influx in human embryonic muscle AChR (hα1β1γδ) ← (-)-reboxetine · direct sigmoid Emax (Hill) effect | — | Arias HR et al., (-)-Reboxetine inhibits muscle nicotini…, Neurochemistry international (2013) | [10.1016/j.neuint.2013.07.009](https://doi.org/10.1016/j.neuint.2013.07.009) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Arias_2013_Ca2_influx_2](drugs/drug_reboxetine/pd_Arias_2013_Ca2_influx_2.md) | (±)-epibatidine-induced Ca2+ influx in human adult muscle AChR (hα1β1εδ) ← (-)-reboxetine · direct sigmoid Emax (Hill) effect | — | Arias HR et al., (-)-Reboxetine inhibits muscle nicotini…, Neurochemistry international (2013) | [10.1016/j.neuint.2013.07.009](https://doi.org/10.1016/j.neuint.2013.07.009) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Grandoso_2004_locus_coeruleus_neuron_firing_rate](drugs/drug_reboxetine/pd_Grandoso_2004_locus_coeruleus_neuron_firing_rate.md) | locus coeruleus neuron firing rate ← reboxetine · inhibition effect | — | Grandoso L et al., Comparative study of the effects of des…, Neuropharmacology (2004) | [10.1016/j.neuropharm.2003.11.033](https://doi.org/10.1016/j.neuropharm.2003.11.033) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=reboxetine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:43 | 0:46 | 0/0/0 | 1/1/0 | 0/0/0 | 41,559/2,494 | ollama / glm-5.3-flash | 13 | 2/8 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 94 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pellizzoni_1996.pdf` | Pellizzoni C et al., Pharmacokinetics of reboxetine in healt…, Biopharmaceutics & drug dis… (1996) | popPK | 8 | [10.1002/(SICI)1099-081X(199610)17:7&lt;623::AID-BDD978&gt;3.0.CO;2-S](https://doi.org/10.1002/(SICI)1099-081X(199610)17:7<623::AID-BDD978>3.0.CO;2-S) | [8894119](https://pubmed.ncbi.nlm.nih.gov/8894119) | Human PK study of reboxetine after single and repeated oral doses, but the evidence gives only the accumulation ratio (~2); CL, V, t½ and other parameter values are not shown and may live in tables/figures not provided. |
| `Fossa_2012.pdf` | Fossa AA et al., Improved preclinical cardiovascular the…, Toxicology and applied phar… (2012) | pd | 5 | [10.1016/j.taap.2012.09.010](https://doi.org/10.1016/j.taap.2012.09.010) | [23000177](https://www.ncbi.nlm.nih.gov/pubmed/23000177) | metadata signals extractable PD data (exposure-response) |
| `Caccia_1998.pdf` | Caccia S, Metabolism of the newer antidepressants…, Clinical pharmacokinetics (1998) | pgx | 8 | [10.2165/00003088-199834040-00002](https://doi.org/10.2165/00003088-199834040-00002) | [9571301](https://www.ncbi.nlm.nih.gov/pubmed/9571301) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kuhn_2007.pdf` | Kuhn UD et al., Reboxetine and cytochrome P450--compari…, International journal of cl… (2007) | pgx | 8 | [10.5414/cpp45036](https://doi.org/10.5414/cpp45036) | [17256449](https://www.ncbi.nlm.nih.gov/pubmed/17256449) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fleishaker_2000.pdf` | Fleishaker JC, Clinical pharmacokinetics of reboxetine…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039060-00003](https://doi.org/10.2165/00003088-200039060-00003) | [11192474](https://www.ncbi.nlm.nih.gov/pubmed/11192474) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Italiano_2014.pdf` | Italiano D et al., Pharmacokinetic and pharmacodynamic int…, Expert opinion on drug meta… (2014) | pgx | 7 | [10.1517/17425255.2014.956081](https://doi.org/10.1517/17425255.2014.956081) | [25196459](https://www.ncbi.nlm.nih.gov/pubmed/25196459) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_2003.pdf` | Spina E et al., Metabolic drug interactions with new ps…, Fundamental & clinical phar… (2003) | pgx | 7 | [10.1046/j.1472-8206.2003.00193.x](https://doi.org/10.1046/j.1472-8206.2003.00193.x) | [14703714](https://www.ncbi.nlm.nih.gov/pubmed/14703714) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Spina_2008.pdf` | Spina E et al., Clinically relevant pharmacokinetic dru…, Clinical therapeutics (2008) | pgx | 7 | [10.1016/s0149-2918(08)80047-1](https://doi.org/10.1016/s0149-2918(08)80047-1) | [18691982](https://www.ncbi.nlm.nih.gov/pubmed/18691982) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Spina_2012.pdf` | Spina E et al., Clinically significant drug interaction…, CNS drugs (2012) | pgx | 7 | [10.2165/11594710-000000000-00000](https://doi.org/10.2165/11594710-000000000-00000) | [22171584](https://www.ncbi.nlm.nih.gov/pubmed/22171584) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Avenoso_1999.pdf` | Avenoso A et al., No effect of the new antidepressant reb…, Therapeutic drug monitoring (1999) | pgx | 5 | [10.1097/00007691-199910000-00015](https://doi.org/10.1097/00007691-199910000-00015) | [10519458](https://www.ncbi.nlm.nih.gov/pubmed/10519458) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-06T23:43:16.991862+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arauz_2026 | irrelevant | 0 | 0 | Reboxetine is only an acute pharmacological probe for fatigue; no PK parameters are reported. |
| popPK | Arenales_2026 | irrelevant | 0 | 0 | Reboxetine is only a pharmacological probe (8 mg single dose) in a cognitive/EEG study; no PK parameters (CL, V, ka, half-life) are reported anywhere in the evidence. |
| popPK | Arias_2013 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study with no PK disposition parameters for reboxetine. |
| PGx | Avenoso_1999 | not_relevant | 3 | 5 | Paper examines reboxetine's effect on CYP2D6 activity (drug as perpetrator), not how a gene variant changes reboxetine PK/PD. |
| PD | Baker_2002 | not_relevant | 1 | 0 | The paper is a review discussing the general relevance of chirality to drug development and mentions reboxetine only as an example of a chiral antidepressant, without providing specific numeric PD parameters or exposure-response data. |
| popPK | Benson_2010 | irrelevant | 2 | 5 | In-vitro receptor binding kinetics (kon/koff, Kd) to hNET, not disposition PK parameters (CL, V, half-life with volume) of reboxetine. |
| PD | Benson_2010 | not_relevant | 0 | 0 | The paper reports in vitro binding kinetics (Kd, kon, koff) to the hNET transporter, which are pharmacological binding parameters, not pharmacodynamic (exposure-response or dose-response) parameters describing a physiological or clinical effect. |
| PGx | Blakely_2001 | not_relevant | 3 | 2 | Perspective discussing potential genetic variation of NET/SERT affecting drug response generally, with no specific reboxetine PK/PD parameter or effect size reported. |
| PD | Borowicz_2014 | not_relevant | 3 | 2 | The study reports qualitative dose-dependent effects (threshold changes) and confirms pharmacodynamic interactions via unchanged brain concentrations, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| PGx | Caccia_1998 | not_relevant | 2 | 1 | Review mentions CYP2D6/2C19 polymorphism may affect metabolism generally, but provides no specific gene-variant effect on reboxetine PK/PD parameters. |
| popPK | Cheng_2020 | irrelevant | 0 | 0 | This is an efficacy (dose-effect/time-course of depression scores) MBMA of antidepressants, not a PK study reporting disposition parameters for reboxetine. |
| PD | Cheng_2020 | not_relevant | 2 | 1 | The paper is a meta-analysis that explicitly states no significant dose-response relationship was observed for the antidepressants, and it does not provide specific numeric PD parameters (like Emax or EC50) for reboxetine. |
| PD | DeVane_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing pharmacological characteristics and does not provide specific numeric PD parameters or exposure-response data for reboxetine. |
| PGx | De_2012 | not_relevant | 0 | 0 | Review of ADHD drug therapy; no gene variant effect on reboxetine PK/PD reported. |
| PD | Di_2017 | not_relevant | 1 | 0 | The text is a review article focusing on the mechanism of action of alpha-2 adrenoceptor modulators for neuropathic pain and does not report any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters for reboxetine. |
| PD | Dostert_1997 | not_relevant | 1 | 0 | The text is a review of pharmacokinetics and metabolism that only qualitatively mentions pharmacodynamic properties (potency, receptor affinity) without providing any numeric PD parameters or exposure-response data. |
| PD | Eisensamer_2005 | not_relevant | 2 | 0 | The paper investigates the mechanism of noncompetitive inhibition via lipid raft enrichment and reports qualitative associations between drug concentration in membrane fractions and inhibitory potency, but it does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for reboxetine. |
| popPK | Fleishaker_2000 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | Review of reboxetine clinical pharmacokinetics with no reported pharmacogenomic effects on PK/PD parameters. |
| PD | Fossa_2012 | not_relevant | 3 | 2 | The paper describes qualitative exposure-response trends and specific fold-changes in NE levels but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for reboxetine. |
| popPK | Grandoso_2004 | irrelevant | 0 | 0 | Electrophysiology study of reboxetine effects on rat locus coeruleus neurons; no PK parameters reported. |
| PD | Hay_2008 | not_relevant | 1 | 0 | The text is a systematic review summary that lists reboxetine as an intervention but provides no pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| PD | Hay_2010 | not_relevant | 1 | 0 | The paper is a systematic review of clinical outcomes for bulimia nervosa treatments and does not report any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for reboxetine. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for reboxetine. |
| PGx | Hodgson_2014 | not_relevant | 2 | 3 | Reboxetine only used in replication cohort for ADR susceptibility; no PK/PD parameter effect reported. |
| PD | Italiano_2014 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Italiano_2014 | not_relevant | 0 | 0 | Review of drug-drug interactions between antiepileptics and antidepressants; no gene variant effects on reboxetine PK/PD reported. |
| PGx | Jastrzębska-Więsek_2018 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on reboxetine PK/PD are reported; study examines drug-drug interaction with EMD386088 in rats. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper models evogliptin, not reboxetine; reboxetine is not mentioned at all. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper reports a PD model for evogliptin, not reboxetine. |
| PD | Kreiner_2019 | not_relevant | 2 | 1 | The study reports qualitative behavioral and histological improvements with a fixed dose of reboxetine but does not provide plasma/tissue concentration data or fit a dose-response curve to derive numeric PD parameters like Emax or EC50. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The paper models atomoxetine, buspirone, and PF compounds in rats; reboxetine is not the subject drug and no reboxetine PK parameters appear. |
| PD | Li_2012 | not_relevant | 0 | 0 | The paper focuses on atomoxetine, buspirone, and novel compounds (PF-04269339, PF-03529936), not reboxetine. |
| popPK | Mangas-Sanjuan_2016 | irrelevant | 0 | 0 | This is a population PK/PD study of axomadol, not reboxetine; reboxetine is not the subject drug. |
| PD | Mangas-Sanjuan_2016 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for axomadol, not reboxetine. |
| PD | Miziak_2022 | not_relevant | 2 | 1 | The paper is a review of pharmacodynamic interactions in animal models (mice) and does not report a formal exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for reboxetine in humans or a derivable concentration-effect curve. |
| PD | Newton_2011 | not_relevant | 1 | 0 | The text is a brief editorial summary of a study by Hysek et al. and does not contain the full data, numeric PD parameters, or concentration-effect curves required for extraction. |
| PD | Ohman_2003 | not_relevant | 3 | 2 | The paper reports pharmacokinetic variability and a qualitative estimation of NARI activity based on enantiomer ratios, but it does not provide a quantitative exposure-response model or numeric PD parameters (e.g., Emax, EC50) for reboxetine. |
| PD | Palleria_2020 | not_relevant | 1 | 0 | The paper is a narrative review of drug-drug interactions and contains no original data, concentration-effect curves, or numeric PD parameters for reboxetine. |
| popPK | Pellizzoni_1996 | relevant | 8 | 3 | Human PK study of reboxetine after single and repeated oral doses, but the evidence gives only the accumulation ratio (~2); CL, V, t½ and other parameter values are not shown and may live in tables/figures not provided. |
| PD | Schreiber_2023 | not_relevant | 2 | 0 | The paper describes a qualitative finding that reboxetine induced a weak antinociceptive effect with no significant opioid involvement, but it does not provide numeric dose-response parameters, concentration-effect curves, or PD model fits for reboxetine. |
| PGx | Spina_2003 | not_relevant | 2 | 2 | Review of CYP-mediated drug interactions; no gene variant/genotype effect on reboxetine PK/PD parameters reported. |
| PGx | Spina_2008 | not_relevant | 0 | 0 | Review of CYP-mediated drug interactions; no gene variant/genotype effect on reboxetine PK/PD reported. |
| PGx | Spina_2012 | not_relevant | 0 | 0 | Review of drug interactions with newer antidepressants; no gene variant/genotype effects on reboxetine PK/PD reported. |
| PD | Szopa_2018 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic interactions and dose-response trends for DPCPX, but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for reboxetine. |
| PGx | Thomas_2008 | not_relevant | 3 | 0 | Trial protocol only; no gene-variant effect on reboxetine PK/PD parameters reported. |
| popPK | Usall_2014 | irrelevant | 0 | 0 | This is a clinical efficacy trial of reboxetine as adjunctive therapy in schizophrenia, with no pharmacokinetic parameters reported. |
| PD | Wen_2025 | not_relevant | 4 | 2 | The paper performs a dose-response meta-analysis for reboxetine, but the results are explicitly stated as "not statistically significant," and no numeric PD parameters (e.g., slope, Emax, specific dose-effect curve coefficients) are provided in the text to derive a relationship. |
| PGx | Wienkers_1999 | not_relevant | 3 | 5 | Identifies CYP3A as the enzyme metabolizing reboxetine in vitro, but does not report a gene variant/genotype/phenotype effect on a PK or PD parameter in vivo. |
| PD | Zhou_2025 | not_relevant | 3 | 2 | The paper is a network meta-analysis that qualitatively describes dose-response trends (e.g., linear increase for reboxetine) but does not provide specific numeric PD parameters (like EC50 or Emax) or extractable concentration-effect curves for reboxetine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
