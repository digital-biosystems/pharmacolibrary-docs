<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;dexfenfluramine&quot;}]"></div>

# dexfenfluramine

- **generic name:** dexfenfluramine
- **ATC codes:** `A08AA04`
- **DrugBank:** [DB01191](https://go.drugbank.com/drugs/DB01191) · **PubChem:** [CID 66265](https://pubchem.ncbi.nlm.nih.gov/compound/66265)
- **molar mass:** 231.2573 g/mol (C12H16F3N) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Dexfenfluramine was a centrally acting antiobesity drug used to help with weight loss in obesity. It is no longer used; it was withdrawn from the market after being linked to serious heart valve damage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3025599](https://www.wikidata.org/wiki/Q3025599) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Erenburg_2024_Antiseizure_activity_brain_5](drugs/drug_dexfenfluramine/pd_Erenburg_2024_Antiseizure_activity_brain_5.md) | Antiseizure activity (brain) ← d,l-norfenfluramine (as metabolite of d,l-fenfluramine) · direct sigmoid Emax (Hill) effect | — | Erenburg N et al., Stereoselective Analysis of the Antisei…, International journal of mo… (2024) | [10.3390/ijms25052522](https://doi.org/10.3390/ijms25052522) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Erenburg_2024_Antiseizure_activity_brain_6](drugs/drug_dexfenfluramine/pd_Erenburg_2024_Antiseizure_activity_brain_6.md) | Antiseizure activity (brain) ← l-norfenfluramine (as metabolite of l-fenfluramine) · direct sigmoid Emax (Hill) effect | — | Erenburg N et al., Stereoselective Analysis of the Antisei…, International journal of mo… (2024) | [10.3390/ijms25052522](https://doi.org/10.3390/ijms25052522) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Gross_1996](drugs/drug_dexfenfluramine/pgx_Gross_1996_CYP2D6_Q27.md) | Gross AS et al., The influence of the sparteine/debrisoq…, British journal of clinical… (1996) | [10.1046/j.1365-2125.1996.03178.x](https://doi.org/10.1046/j.1365-2125.1996.03178.x) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dexfenfluramine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` inhibitor/metabolism/substrate, `CYP2E1` inhibitor | DrugBank actor |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:30 | 4:13 | 0/0/0 | 0/1/0 | 0/0/1 | 124,032/7,493 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 4/7 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 119 matched, 91 returned
- **screened:** 7  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mittur_2024.pdf` | Mittur A et al., Effect of Hepatic Impairment on the Pha…, Journal of clinical pharmac… (2024) | pd | 5 | [10.1002/jcph.2431](https://doi.org/10.1002/jcph.2431) | [38523492](https://www.ncbi.nlm.nih.gov/pubmed/38523492) | metadata signals extractable PD data (exposure-response) |
| `Berger_1992.pdf` | Berger UV et al., The substituted amphetamines 3,4-methyl…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90023-w](https://doi.org/10.1016/0014-2999(92)90023-w) | [1356787](https://www.ncbi.nlm.nih.gov/pubmed/1356787) | metadata signals extractable PD data (EC50) |
| `Gobbi_1989.pdf` | Gobbi M et al., In-vivo (+)-[3H]fenfluramine binding to…, The Journal of pharmacy and… (1989) | pd | 4 | [10.1111/j.2042-7158.1989.tb06445.x](https://doi.org/10.1111/j.2042-7158.1989.tb06445.x) | [2568465](https://www.ncbi.nlm.nih.gov/pubmed/2568465) | metadata signals extractable PD data (IC50) |
| `Kannengiesser_1976.pdf` | Kannengiesser MH et al., Comparative action of fenfluramine on t…, European journal of pharmac… (1976) | pd | 4 | [10.1016/0014-2999(76)90298-3](https://doi.org/10.1016/0014-2999(76)90298-3) | [1253827](https://www.ncbi.nlm.nih.gov/pubmed/1253827) | metadata signals extractable PD data (IC50) |
| `McElroy_1988.pdf` | McElroy JF et al., Discriminative stimulus properties of c…, The Journal of pharmacology… (1988) | pd | 4 |  | [2834535](https://www.ncbi.nlm.nih.gov/pubmed/2834535) | metadata signals extractable PD data (IC50) |
| `Robinson_1989.pdf` | Robinson TN et al., The mechanism of tetrahydroaminoacridin…, British journal of pharmaco… (1989) | pd | 4 | [10.1111/j.1476-5381.1989.tb12656.x](https://doi.org/10.1111/j.1476-5381.1989.tb12656.x) | [2611486](https://www.ncbi.nlm.nih.gov/pubmed/2611486) | metadata signals extractable PD data (IC50) |
| `Rothman_2003.pdf` | Rothman RB et al., (+)-Fenfluramine and its major metaboli…, The Journal of pharmacology… (2003) | pd | 4 | [10.1124/jpet.103.049684](https://doi.org/10.1124/jpet.103.049684) | [12649307](https://www.ncbi.nlm.nih.gov/pubmed/12649307) | metadata signals extractable PD data (EC50) |
| `Wee_2006.pdf` | Wee S et al., Self-administration of mixtures of fenf…, Pharmacology, biochemistry,… (2006) | pd | 4 | [10.1016/j.pbb.2006.05.022](https://doi.org/10.1016/j.pbb.2006.05.022) | [16828855](https://www.ncbi.nlm.nih.gov/pubmed/16828855) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-04 20:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou-Khalil_2022 | irrelevant | 0 | 0 | no_text gate: only 354 chars of text extracted (&lt; 400) |
| PD | Abou-Khalil_2022 | not_relevant | 0 | 0 | The provided text is a brief editorial note regarding the publication history of a review article and contains no pharmacodynamic data, models, or parameters for dexfenfluramine. |
| popPK | Agarwal_1992 | irrelevant | 0 | 0 | The study is a genotoxicity/clastogenicity assay in mice and does not report any pharmacokinetic parameters for dexfenfluramine. |
| popPK | Anderer_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of buspirone on brain electrical activity and does not report any pharmacokinetic parameters for dexfenfluramine. |
| PD | Anderer_2000 | not_relevant | 0 | 0 | The paper investigates buspirone, not dexfenfluramine, and does not report numeric PD parameters or exposure-response relationships for the target drug. |
| popPK | Anthenelli_2000 | irrelevant | 0 | 0 | The study uses d,l-fenfluramine as a pharmacological probe to measure prolactin response, not dexfenfluramine, and does not report quantitative PK parameters for the target drug. |
| popPK | Berger_1992 | irrelevant | 0 | 0 | no_text gate: only 209 chars of text extracted (&lt; 400) |
| PD | Berger_1992 | not_relevant | 0 | 0 | The paper investigates the mechanism of serotonin release for substituted amphetamines and fenfluramine, but does not report a pharmacokinetic/pharmacodynamic model or numeric exposure-response parameters for dexfenfluramine. |
| PGx | Chiron_2019 | not_relevant | 0 | 0 | The paper discusses stiripentol and mentions fenfluramine, but does not report pharmacogenomic effects on the PK/PD of dexfenfluramine. |
| popPK | De_1991 | irrelevant | 2 | 0 | The study focuses on fenfluramine (not dexfenfluramine) and reports neurochemical markers rather than quantitative PK parameters like clearance or volume. |
| PGx | DellIsola_2026 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy (seizure reduction) and tolerability of fenfluramine in SCN1A-related epilepsy, but does not report pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) or how genetic variants alter these specific PK/PD metrics. |
| popPK | Dini_2022 | irrelevant | 2 | 1 | The paper is a review of fenfluramine (the racemate) in epilepsy, not a primary PK study of dexfenfluramine, and it lacks specific quantitative disposition parameters (CL, V, Q) for the dex-enantiomer. |
| PD | Dini_2022 | not_relevant | 1 | 0 | The paper is a narrative review of fenfluramine's clinical efficacy and mechanism of action, lacking any specific pharmacokinetic/pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Erenburg_2023 | irrelevant | 2 | 0 | The study focuses on fenfluramine and norfenfluramine enantiomers in rodents, not dexfenfluramine, and provides no quantitative PK parameters for the target drug. |
| popPK | Erenburg_2024 | irrelevant | 2 | 0 | The study focuses on the antiseizure activity (pharmacodynamics) of fenfluramine and norfenfluramine in mice, reporting ED50 and EC50 values rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for dexfenfluramine. |
| popPK | Fielden_2010 | irrelevant | 0 | 0 | The paper is a mechanistic study on valvular heart disease and receptor binding, not a pharmacokinetic study, and does not report PK parameters for dexfenfluramine. |
| popPK | Foltin_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in baboons measuring food intake and tolerance, with no pharmacokinetic parameters or disposition data reported. |
| popPK | Foltin_2011 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in baboons measuring food intake and dose-response curves, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Fracasso_1995 | irrelevant | 2 | 0 | The study focuses on neurochemical effects (serotonin depletion) and qualitative PK comparisons in rodents, without reporting specific quantitative PK parameters (CL, V, ka) for dexfenfluramine. |
| popPK | Francis_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of DL-fenfluramine on food intake and gastric emptying in rats, not its pharmacokinetic parameters. |
| popPK | Gadow_1992 | irrelevant | 0 | 0 | The paper is a review of pediatric psychopharmacotherapy that mentions fenfluramine only as a potential treatment candidate without reporting any pharmacokinetic parameters. |
| PD | Gadow_1992 | not_relevant | 1 | 0 | The text is a general review of pediatric psychopharmacotherapy that mentions fenfluramine qualitatively but provides no specific data, dose-response curves, or numeric PD parameters for dexfenfluramine. |
| popPK | Gobbi_1989 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Gobbi_1989 | not_relevant | 0 | 0 | The paper describes in-vitro/in-vivo radioligand binding studies (Kd, Bmax) for fenfluramine, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for drug effects. |
| popPK | Gobbi_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin release in rat synaptosomes and does not report pharmacokinetic disposition parameters. |
| popPK | Gobbi_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release by (+)-norfenfluramine (a metabolite of fenfluramine) and does not report pharmacokinetic parameters for dexfenfluramine. |
| popPK | Goodwin_1994 | irrelevant | 0 | 0 | The study focuses on neuroendocrine and subjective effects of dexfenfluramine and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Goodwin_1994 | not_relevant | 1 | 0 | The study reports a lack of statistically discernible effects at a single dose (30 mg) and explicitly states that more information is required on the dose-response relationship, providing no numeric PD parameters or concentration-effect data. |
| popPK | Haritos_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme kinetics (Km, Vmax) in liver microsomes, not a pharmacokinetic study reporting in-vivo disposition parameters like clearance or volume. |
| PD | Haritos_1998 | not_relevant | 0 | 0 | The paper reports in vitro metabolic kinetics (Km, Vmax, IC50 for enzyme inhibition) but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug's therapeutic effect. |
| PGx | Haritos_1998 | not_relevant | 2 | 0 | The paper is an in vitro study using liver microsomes and recombinant enzymes; it does not report in vivo pharmacokinetic or pharmacodynamic parameters in human subjects stratified by genotype. |
| popPK | Hu_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition and does not report any pharmacokinetic parameters. |
| popPK | Inserte_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on serotonin uptake inhibition by tetanus toxin, not a pharmacokinetic study of dexfenfluramine. |
| PD | Inserte_1999 | not_relevant | 0 | 0 | The paper reports PD parameters for tetanus toxin and fenfluramine (not dexfenfluramine) in a biochemical assay, not a pharmacokinetic/pharmacodynamic study of dexfenfluramine. |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated efflux in cell lines, not a pharmacokinetic study reporting disposition parameters for dexfenfluramine. |
| PD | Johnson_1998 | not_relevant | 0 | 0 | The paper reports in vitro transporter efflux data for fenfluramine, not dexfenfluramine, and does not provide specific numeric PD parameters (EC50/Emax) for the target drug. |
| popPK | Kannengiesser_1976 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Kannengiesser_1976 | not_relevant | 0 | 0 | The paper focuses on the comparative action of fenfluramine (not dexfenfluramine) on serotonin and dopamine uptake/release in vitro, lacking any pharmacokinetic or exposure-response modeling. |
| popPK | Kilpatrick_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study examining MAO inhibition and serotonin release, not a pharmacokinetic study reporting disposition parameters for dexfenfluramine. |
| PD | Kilpatrick_2001 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values for MAO inhibition, which are enzyme kinetics parameters, not pharmacodynamic exposure-response or dose-response relationships for the drug's clinical effect. |
| popPK | Kornblith_1976 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats focusing on food intake and brain stimulation, not a pharmacokinetic study, and does not report any disposition parameters for dexfenfluramine. |
| PD | Kornblith_1976 | not_relevant | 1 | 0 | The paper studies fenfluramine (not dexfenfluramine) and provides only qualitative descriptions of dose effects without numeric PD parameters or extractable curves. |
| popPK | Leonardi_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of MAO inhibition and does not report pharmacokinetic parameters for dexfenfluramine. |
| PD | Leonardi_1994 | not_relevant | 0 | 0 | The paper describes an in vitro MAO inhibition assay for MDMA and fenfluramine, not an in vivo pharmacodynamic or exposure-response analysis for dexfenfluramine. |
| popPK | Lewis_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of fenfluramine (not dexfenfluramine) on hormone secretion and does not report quantitative pharmacokinetic parameters. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of SERT ligands AFM and DASB, with fenfluramine serving only as a low-affinity competitor in binding assays, and no PK parameters for dexfenfluramine are reported. |
| PD | Li_2004 | not_relevant | 0 | 0 | The paper characterizes the binding affinity (Kd) and selectivity of PET ligands (AFM and DASB) for the serotonin transporter, not the pharmacodynamic exposure-response relationship of dexfenfluramine. |
| popPK | Maeda_1994 | irrelevant | 0 | 0 | The study investigates the neural mechanisms of penile erection in rats using fenfluramine (not dexfenfluramine) as a pharmacological tool, and it does not report any pharmacokinetic parameters. |
| popPK | Mallillin_2026 | irrelevant | 0 | 0 | The paper is a review of allometric scaling methods and does not report original quantitative pharmacokinetic parameters for dexfenfluramine. |
| PD | Mallillin_2026 | not_relevant | 1 | 0 | The paper is a review of allometric scaling and PK prediction; it mentions fenfluramine only as a historical example of toxicodynamic failure without providing any numeric PD parameters or exposure-response data. |
| popPK | Marona-Lewicka_1994 | irrelevant | 0 | 0 | The study focuses on the behavioral effects of MMAI and does not report pharmacokinetic parameters for dexfenfluramine. |
| PD | Marona-Lewicka_1994 | not_relevant | 0 | 0 | The paper studies the behavioral effects of MMAI, not dexfenfluramine, and does not report any pharmacodynamic parameters for dexfenfluramine. |
| PGx | Martin_2022 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interaction and metabolic pathway data for fenfluramine, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Martin_2022_2 | not_relevant | 0 | 0 | The paper evaluates the drug-drug interaction potential of fenfluramine and norfenfluramine in vitro, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Martinez_2002 | irrelevant | 0 | 0 | The paper is a clinical study on Chinese herb nephropathy and does not report pharmacokinetic parameters for dexfenfluramine. |
| PD | Martinez_2002 | not_relevant | 0 | 0 | The paper analyzes the dose-response relationship for Aristolochia fangchi (and mentions fenfluramine as a co-ingested drug), but it does not report any pharmacodynamic or exposure-response relationship for dexfenfluramine. |
| popPK | McElroy_1988 | irrelevant | 0 | 0 | The study focuses on the discriminative stimulus properties of clenbuterol in rats and does not report pharmacokinetic parameters for dexfenfluramine. |
| PD | McElroy_1988 | not_relevant | 0 | 0 | The paper focuses on the discriminative stimulus properties of clenbuterol and does not report any pharmacodynamic or exposure-response data for dexfenfluramine. |
| popPK | Mittur_2024 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Mittur_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of fenfluramine and norfenfluramine in hepatic impairment and does not report any pharmacodynamic or exposure-response data for dexfenfluramine. |
| popPK | Ni_2004 | irrelevant | 0 | 0 | The study investigates the vasoactive pharmacodynamics of norfenfluramine in rats, not the pharmacokinetic disposition parameters of dexfenfluramine. |
| popPK | Ni_2005 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vasoconstriction in mice, not a pharmacokinetic study, and it does not report disposition parameters for dexfenfluramine. |
| popPK | Nickel_1986 | irrelevant | 0 | 0 | The paper studies fenetylline, not dexfenfluramine, and does not report PK parameters for the target drug. |
| PD | Nickel_1986 | not_relevant | 1 | 0 | The text discusses fenetylline (not dexfenfluramine) and only qualitatively states that pharmacodynamic activity is tied to plasma levels without providing numeric PD parameters or curves. |
| popPK | Odi_2021 | irrelevant | 0 | 0 | The paper is a narrative review discussing mechanisms and clinical use of fenfluramine, containing no original quantitative pharmacokinetic parameter values for dexfenfluramine. |
| PD | Odi_2021 | not_relevant | 1 | 0 | The text is a narrative review discussing mechanisms and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or PK/PD modeling results. |
| popPK | Padich_1996 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study on sensorimotor gating in rats and does not report any pharmacokinetic parameters for dexfenfluramine. |
| PD | Padich_1996 | not_relevant | 0 | 0 | The paper studies fenfluramine and MDL 100,907, not dexfenfluramine, and does not report PK/PD modeling or numeric PD parameters for dexfenfluramine. |
| popPK | Pan_2025 | irrelevant | 0 | 0 | The paper describes an immunoassay method for detecting fenfluramine adulteration in food, not a pharmacokinetic study of dexfenfluramine. |
| PD | Pan_2025 | not_relevant | 0 | 0 | The paper describes an immunoassay method for detecting fenfluramine in food, not a pharmacodynamic or exposure-response study in biological subjects. |
| popPK | Pigliasco_2024 | irrelevant | 0 | 0 | The paper describes an analytical method for fenfluramine (not dexfenfluramine) and reports only plasma concentrations, not pharmacokinetic disposition parameters. |
| PD | Pigliasco_2024 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for quantifying fenfluramine and cannabidiol in plasma and reports observed plasma concentrations, but it does not report any pharmacodynamic (PD) or exposure-response relationship, dose-response curve, or numeric PD parameters. |
| popPK | Quednow_2012 | irrelevant | 1 | 0 | The study uses dexfenfluramine as a pharmacological challenge agent to assess serotonin release via PET, and while it mentions plasma concentration-time profiles, it does not report quantitative pharmacokinetic parameters (CL, V, ka) for dexfenfluramine. |
| popPK | Ramírez_1982 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of fenfluramine (not dexfenfluramine) and does not report any pharmacokinetic parameters. |
| PD | Ramírez_1982 | not_relevant | 2 | 1 | The paper studies fenfluramine (not dexfenfluramine) and reports only qualitative dose-dependent effects without providing numeric PD parameters or extractable concentration-effect curves. |
| PGx | Reist_2004 | not_relevant | 2 | 5 | The study investigates the effect of 5-HT2A polymorphisms on fenfluramine-induced prolactin release (a PD marker), but the drug of interest is dexfenfluramine, and the reported effects were not statistically significant. |
| popPK | Roberti_2025 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions in epilepsy syndromes and does not mention dexfenfluramine or report any pharmacokinetic parameters for it. |
| PD | Roberti_2025 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in epilepsy syndromes and does not contain any data, analysis, or numeric parameters for dexfenfluramine. |
| PGx | Roberti_2025 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in epilepsy syndromes and does not mention dexfenfluramine or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Robinson_1989 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Robinson_1989 | not_relevant | 0 | 0 | The paper investigates the mechanism of neurotransmitter release evoked by tetrahydroaminoacridine in rat brain tissue and does not mention dexfenfluramine or report any pharmacodynamic parameters for it. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Rothman_2003 | not_relevant | 0 | 0 | The text describes the pharmacological mechanism (substrate for norepinephrine transporters) but contains no data, analysis, or numeric parameters regarding exposure-response or dose-response relationships. |
| popPK | Rothman_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin transporter modulation using rat synaptosomes and does not report pharmacokinetic parameters for dexfenfluramine. |
| PD | Rothman_2010 | not_relevant | 0 | 0 | The paper describes in vitro pharmacology of SERT inhibitors and substrates, not the pharmacodynamics of dexfenfluramine in vivo or in a clinical context. |
| popPK | Saletu_1993 | irrelevant | 2 | 0 | The study reports qualitative blood level trends and pharmacodynamic effects (EEG) but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) for dexfenfluramine. |
| popPK | Scarduelli_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of fenfluramine (not dexfenfluramine) on prolactin levels and does not report any pharmacokinetic parameters. |
| PD | Scarduelli_1985 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response effect (40 vs 80 mg) on prolactin levels but does not provide specific numeric PD parameters (like Emax, EC50) or detailed concentration-effect data in the provided text. |
| popPK | Schechter_1981 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats focusing on drug discrimination, not pharmacokinetics, and does not report any PK parameters for dexfenfluramine. |
| PD | Schechter_1981 | not_relevant | 3 | 2 | The paper reports behavioral dose-response curves for fenfluramine (not dexfenfluramine) and nicotine in rats, but the provided text only contains qualitative descriptions of the effects and does not provide the numeric data points or parameters required to derive a specific PD relationship. |
| popPK | Schechter_1985 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation using fenfluramine as a probe, not a pharmacokinetic study, and contains no PK parameters for dexfenfluramine. |
| PD | Schechter_1985 | not_relevant | 0 | 0 | The paper investigates fenfluramine (not dexfenfluramine) and reports only qualitative behavioral outcomes (intermediate results) without numeric PD parameters or dose-response curves for the target drug. |
| popPK | Schechter_1986 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment on fenfluramine (not dexfenfluramine) and does not report any pharmacokinetic parameters. |
| popPK | Schechter_1996 | irrelevant | 0 | 0 | The study is a behavioral drug discrimination experiment in rats, not a pharmacokinetic study, and does not report any disposition parameters for dexfenfluramine. |
| popPK | Sen_1994 | irrelevant | 0 | 0 | The study is a genotoxicity/clastogenicity assessment in mice and does not report any pharmacokinetic parameters for dexfenfluramine. |
| PD | Sen_1994 | not_relevant | 3 | 2 | The study reports qualitative dose-dependent clastogenicity and synergism with caffeine but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for dexfenfluramine. |
| popPK | Sheeni_2025 | irrelevant | 2 | 2 | The study reports single-timepoint plasma and brain concentrations for PK/PD correlation in mice, but does not provide quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental/population-PK model for dexfenfluramine. |
| popPK | Sheeni_2026 | irrelevant | 0 | 0 | The study focuses on fenfluramine and norfenfluramine, not dexfenfluramine, and reports pharmacodynamic potency/toxicity indices rather than quantitative PK parameters for the target drug. |
| PGx | Souche_1991 | not_relevant | 0 | 0 | The paper studies citalopram and uses fenfluramine as a probe for serotonin function, but does not report pharmacokinetic or pharmacodynamic parameters for dexfenfluramine. |
| popPK | Stewart_1997 | irrelevant | 1 | 0 | The study focuses on the neurochemical effects of dexfenfluramine (5-HT depletion) and body temperature, and while it mentions plasma levels, it does not report quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Surdi_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes (seizure frequency, cognition) in Dravet syndrome patients and does not report pharmacokinetic or pharmacodynamic parameters of dexfenfluramine. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice using fenfluramine (not dexfenfluramine) as a serotonergic probe, with no pharmacokinetic parameters reported. |
| PGx | Ton_2007 | not_relevant | 0 | 0 | The study investigates gene-treatment interactions on smoking cessation outcomes (behavioral efficacy), not pharmacokinetic or pharmacodynamic parameters of the drug. |
| popPK | Van_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of prolactin secretion in rats using fenfluramine (not dexfenfluramine) and does not report any pharmacokinetic parameters. |
| PD | Van_1989 | not_relevant | 0 | 0 | The paper studies fenfluramine (not dexfenfluramine) and reports qualitative dose-dependent effects on prolactin without providing numeric PD parameters or extractable concentration-effect curves. |
| popPK | Wee_2006 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rhesus monkeys focusing on self-administration and reinforcing efficacy, not pharmacokinetics, and does not report any PK parameters for dexfenfluramine. |
| popPK | Weintraub_1984 | irrelevant | 0 | 0 | The paper is a clinical trial focused on weight loss efficacy and adverse effects, reporting no pharmacokinetic parameters for dexfenfluramine. |
| PD | Weintraub_1984 | not_relevant | 1 | 0 | The paper reports clinical efficacy (weight loss) and adverse effects for fixed doses but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Young_2006 | irrelevant | 0 | 0 | The study focuses on the behavioral effects of TDIQ and fenfluramine (not dexfenfluramine) in mice and does not report any pharmacokinetic parameters. |
| popPK | Zaczek_1990 | irrelevant | 2 | 0 | The study focuses on fenfluramine (not dexfenfluramine) and neurochemical effects, with no quantitative PK parameters (CL, V, etc.) reported in the evidence. |
| popPK | Zorrilla_2005 | irrelevant | 0 | 0 | The study focuses on the behavioral effects of leptin and fenfluramine on meal patterning in rats, not on the pharmacokinetic parameters of dexfenfluramine. |
| PD | Zorrilla_2005 | not_relevant | 0 | 0 | The paper studies fenfluramine and leptin, not dexfenfluramine, and does not report concentration-effect or PK/PD parameters for the target drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexfenfluramine%5D&body=Drug%3A%20dexfenfluramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dexfenfluramine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
