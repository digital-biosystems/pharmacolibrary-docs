<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;phenelzine&quot;}]"></div>

# phenelzine

- **generic name:** phenelzine
- **ATC codes:** `N06AF03`
- **DrugBank:** [DB00780](https://go.drugbank.com/drugs/DB00780) · **PubChem:** [CID 3675](https://pubchem.ncbi.nlm.nih.gov/compound/3675)
- **molar mass:** 136.1943 g/mol (C8H12N2) — DrugBank
- **groups:** approved, investigational

## About

Phenelzine is a monoamine oxidase inhibitor antidepressant used to treat depression, including neurotic disorders. It remains an approved medicine, though it is not authorised centrally in the European Union and is used relatively rarely.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1747559](https://www.wikidata.org/wiki/Q1747559) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Dyck_1986_AADC](drugs/drug_phenelzine/pd_Dyck_1986_AADC.md) | aromatic L-amino acid decarboxylase activity of rat brain homogenate ← phenelzine · inhibition effect | — | Dyck LE et al., Inhibition of aromatic L-amino acid dec…, Journal of neurochemistry (1986) | [10.1111/j.1471-4159.1986.tb08511.x](https://doi.org/10.1111/j.1471-4159.1986.tb08511.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Dyck_1986_TAT](drugs/drug_phenelzine/pd_Dyck_1986_TAT.md) | tyrosine aminotransferase activity of rat liver homogenates ← phenelzine · inhibition effect | — | Dyck LE et al., Inhibition of aromatic L-amino acid dec…, Journal of neurochemistry (1986) | [10.1111/j.1471-4159.1986.tb08511.x](https://doi.org/10.1111/j.1471-4159.1986.tb08511.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:41 | 1:20 | 0/0/0 | 0/1/0 | 0/0/0 | 33,296/1,571 | ollama / glm-5.3-flash | 1 | 2/3 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 62 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dyck_1986.pdf` | Dyck LE et al., Inhibition of aromatic L-amino acid dec…, Journal of neurochemistry (1986) | pd | 4 | [10.1111/j.1471-4159.1986.tb08511.x](https://doi.org/10.1111/j.1471-4159.1986.tb08511.x) | [2871132](https://www.ncbi.nlm.nih.gov/pubmed/2871132) | metadata signals extractable PD data (IC50) |
| `Fan_1994.pdf` | Fan P, Effects of antidepressants on the inwar…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13140.x](https://doi.org/10.1111/j.1476-5381.1994.tb13140.x) | [7522857](https://www.ncbi.nlm.nih.gov/pubmed/7522857) | metadata signals extractable PD data (IC50) |
| `Hrdina_1987.pdf` | Hrdina PD, Regulation of high- and low-affinity [3…, European journal of pharmac… (1987) | pd | 4 | [10.1016/0014-2999(87)90429-8](https://doi.org/10.1016/0014-2999(87)90429-8) | [3040430](https://www.ncbi.nlm.nih.gov/pubmed/3040430) | metadata signals extractable PD data (IC50) |
| `Li_2019.pdf` | Li ZR et al., Experience-based discovery (EBD) of ary…, European journal of medicin… (2019) | pd | 4 | [10.1016/j.ejmech.2019.01.075](https://doi.org/10.1016/j.ejmech.2019.01.075) | [30739825](https://www.ncbi.nlm.nih.gov/pubmed/30739825) | metadata signals extractable PD data (IC50) |
| `ODonnell_1985.pdf` | O'Donnell JM et al., Effects of clenbuterol and antidepressa…, The Journal of pharmacology… (1985) | pd | 4 | not captured | [2989510](https://www.ncbi.nlm.nih.gov/pubmed/2989510) | metadata signals extractable PD data (IC50) |
| `Pandey_2018.pdf` | Pandey P et al., Interactions of endocannabinoid virodha…, Biochemical pharmacology (2018) | pd | 4 | [10.1016/j.bcp.2018.06.024](https://doi.org/10.1016/j.bcp.2018.06.024) | [29958841](https://www.ncbi.nlm.nih.gov/pubmed/29958841) | metadata signals extractable PD data (IC50) |
| `Yu_1989.pdf` | Yu PH et al., Deuterium isotope effect of phenelzine…, Biochemical pharmacology (1989) | pd | 4 | [10.1016/0006-2952(89)90522-4](https://doi.org/10.1016/0006-2952(89)90522-4) | [2597196](https://www.ncbi.nlm.nih.gov/pubmed/2597196) | metadata signals extractable PD data (IC50) |
| `Ziance_1977.pdf` | Ziance RJ et al., Influence of MAO inhibitors on uptake a…, Archives internationales de… (1977) | pd | 4 | not captured | [921400](https://www.ncbi.nlm.nih.gov/pubmed/921400) | metadata signals extractable PD data (IC50) |
| `Nirogi_2015.pdf` | Nirogi R et al., Evaluation of metabolism dependent inhi…, Chemico-biological interact… (2015) | pgx | 7 | [10.1016/j.cbi.2015.01.028](https://doi.org/10.1016/j.cbi.2015.01.028) | [25656918](https://www.ncbi.nlm.nih.gov/pubmed/25656918) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Polasek_2006.pdf` | Polasek TM et al., An evaluation of potential mechanism-ba…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02627.x](https://doi.org/10.1111/j.1365-2125.2006.02627.x) | [16669850](https://www.ncbi.nlm.nih.gov/pubmed/16669850) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-06T23:41:18.908767+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The study reports in-vitro enzyme inhibition (IC50) values for phenelzine, not pharmacokinetic disposition parameters. |
| PGx | Anari_1997 | not_relevant | 2 | 3 | No gene variant/genotype effect on phenelzine PK/PD is reported; only CYP-mediated metabolism and hydroperoxide-enhanced cytotoxicity in vitro. |
| popPK | Atkinson_2015 | irrelevant | 0 | 0 | The paper concerns phenylephrine (with paracetamol), not phenelzine, and reports no disposition parameters for phenelzine. |
| PD | Atkinson_2015 | not_relevant | 0 | 0 | The paper models the PD of phenylephrine, not phenelzine; phenelzine is only mentioned qualitatively as a potentiating agent (MAOI). |
| popPK | Baker_1991 | irrelevant | 0 | 0 | The study focuses on the neurochemical effects of phenelzine on GABA levels in rats, not on pharmacokinetic disposition parameters. |
| popPK | Beaudry_1985 | irrelevant | 0 | 0 | The study focuses on clonazepam for panic attacks, and phenelzine is only mentioned as a comparator without any pharmacokinetic data. |
| PD | Beaudry_1985 | not_relevant | 0 | 0 | The paper reports a clinical trial of clonazepam and only mentions phenelzine in the introduction as a known efficacious drug, providing no pharmacodynamic or exposure-response data for phenelzine. |
| popPK | Blanco_2010 | irrelevant | 0 | 0 | Clinical efficacy trial of phenelzine with no pharmacokinetic parameters reported. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | The paper is a review of herb-drug interactions where phenelzine is mentioned only as a comparator in a case report of ginseng-induced mania, with no quantitative pharmacokinetic parameters reported. |
| PD | Chen_2011 | not_relevant | 1 | 0 | The paper is a qualitative review of herb-drug interactions that mentions phenelzine only in the context of a case report of mania induced by ginseng, without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Collier_1968 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on bronchoconstriction in guinea pigs where phenelzine is only mentioned as a comparator agent with activity, and no pharmacokinetic parameters are reported. |
| PD | Collier_1968 | not_relevant | 0 | 0 | The paper focuses on fenamates and only qualitatively mentions phenelzine's activity without providing any numeric dose-response data or PD parameters for it. |
| popPK | Dollery_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of tyramine with cimoxatone, mentioning phenelzine only as a comparator for pressor effect sensitivity without providing any PK parameters for phenelzine. |
| popPK | Dyck_1986 | irrelevant | 1 | 0 | The study focuses on enzyme inhibition mechanisms (IC50 values) and neurochemical effects rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | EVANS_1964 | not_relevant | 5 | 1 | Title only, no phenelzine PK/PD data or genotype effect reported. |
| popPK | Fan_1994 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Fan_1994 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on 5-HT3 receptors in rat neurons but does not mention phenelzine or report any pharmacodynamic parameters for it. |
| popPK | Holt_1995 | irrelevant | 0 | 0 | The study focuses on the metabolism of agmatine by diamine oxidase, using phenelzine only as an inhibitor to determine its IC50, rather than reporting pharmacokinetic parameters for phenelzine itself. |
| PD | Holt_1995 | not_relevant | 3 | 5 | The paper reports an IC50 for phenelzine inhibiting DAO enzyme activity in vitro, which is a pharmacodynamic parameter, but it is not an exposure-response or dose-response relationship for the drug's clinical effect in a subject or population. |
| popPK | Hrdina_1987 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Hrdina_1987 | not_relevant | 0 | 0 | The paper focuses on the regulation of imipramine binding sites by antidepressants and does not report pharmacodynamic or exposure-response data for phenelzine. |
| popPK | Hu_2005 | irrelevant | 0 | 0 | The paper is a literature review of herb-drug interactions where phenelzine is mentioned only as a comparator in a case report of mania, with no quantitative pharmacokinetic parameters reported. |
| PD | Hu_2005 | not_relevant | 1 | 0 | The paper is a qualitative literature review of herb-drug interactions that mentions phenelzine only in the context of a case report of mania induced by ginseng, without providing any numeric PD parameters or exposure-response data. |
| popPK | Inan_2020 | irrelevant | 0 | 0 | The paper is a systematic review of novel phenethylamines (4-FA and 2C-B) and their interactions, where phenelzine is only mentioned as a comparator antidepressant, and no quantitative PK parameters for phenelzine are reported. |
| PD | Inan_2020 | not_relevant | 1 | 0 | The paper is a systematic review of potential drug interactions and contains no original data, numeric PD parameters, or exposure-response curves for phenelzine. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | Herbal-drug interaction case reports; no gene variant/genotype effects on phenelzine PK/PD reported. |
| popPK | Kan_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of SR 95191, using phenelzine only as a comparator agent to demonstrate MAO-A inhibition, and does not report any pharmacokinetic parameters for phenelzine. |
| popPK | Kruse_1977 | irrelevant | 0 | 0 | The study focuses on the pharmacological and biochemical properties of nomifensine metabolites, using phenelzine only as a comparator agent in behavioral tests, and reports no pharmacokinetic parameters for phenelzine. |
| PD | Kruse_1977 | not_relevant | 0 | 0 | The paper studies nomifensine metabolites; phenelzine is only used as a tool drug to induce twitching, and no exposure-response or dose-response relationship for phenelzine itself is reported. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on LSD1 inhibitors where phenelzine is used only as a starting scaffold/comparator, with no pharmacokinetic parameters reported. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on the discovery of a new LSD1 inhibitor (D8) using phenelzine as a scaffold; it reports an IC50 for the new compound but does not provide a pharmacodynamic or exposure-response analysis for phenelzine itself. |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The paper is a review discussing genetic polymorphisms and mentions phenelzine only as an example of a drug metabolized by N-acetyltransferase, without providing any quantitative pharmacokinetic parameters. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a qualitative review mentioning phenelzine in the context of genetic polymorphisms affecting metabolism, but it provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Miller_1998 | irrelevant | 0 | 0 | The paper is a review of drug-herb interactions and mentions phenelzine only as a drug with potential interactions, providing no pharmacokinetic parameters. |
| PD | Miller_1998 | not_relevant | 1 | 0 | The text is a qualitative review of drug-herb interactions that mentions phenelzine only in the context of a potential adverse interaction with ginseng, without providing any numeric PD parameters or exposure-response data. |
| popPK | Modi_2024 | irrelevant | 0 | 0 | Review of mitochondrial antioxidants for TBI with no phenelzine PK parameters or numeric values. |
| PD | Modi_2024 | not_relevant | 0 | 0 | The paper is a review of mitochondria-targeted antioxidants for TBI and does not mention phenelzine or report any pharmacodynamic or exposure-response data. |
| popPK | Nirogi_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6 inhibition and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for phenelzine. |
| PD | Nirogi_2015 | not_relevant | 3 | 2 | The study reports in vitro enzyme inactivation parameters (KI, kinact) and predicted DDI fold-changes, which are pharmacokinetic/toxicological metrics, not pharmacodynamic exposure-response or dose-response relationships for the drug's therapeutic effect. |
| PGx | Nirogi_2015 | not_relevant | 0 | 0 | Study reports phenelzine's inhibition of CYP2B6 in vitro (drug-drug interaction), not a gene variant/genotype effect on phenelzine PK/PD. |
| popPK | Noyes_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for moclobemide, and phenelzine is mentioned only as a background comparator without any pharmacokinetic data. |
| PD | Noyes_1997 | not_relevant | 1 | 0 | The paper is a clinical trial of moclobemide (not phenelzine) and reports only qualitative dose-response trends without numeric PD parameters or concentration-effect data. |
| popPK | ODonnell_1985 | irrelevant | 0 | 0 | Phenelzine is only a co-administered comparator in a receptor-binding study; no PK parameters reported. |
| PD | ODonnell_1985 | not_relevant | 0 | 0 | The paper reports that phenelzine did not affect receptor/N-protein coupling, providing no numeric PD parameters or exposure-response relationship for phenelzine. |
| popPK | ODonnell_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where phenelzine is used only as a comparator agent to test receptor independence, with no pharmacokinetic parameters reported. |
| PD | ODonnell_1990 | not_relevant | 1 | 0 | The paper mentions phenelzine only to state that its behavioral effects were unaltered by beta-2 down-regulation, without providing any dose-response data, concentration-effect curves, or numeric PD parameters for phenelzine. |
| PGx | Otton_1990 | not_relevant | 0 | 0 | Phenelzine is only used as a tool inhibitor of MAO; no gene/genotype effect on phenelzine PK/PD is reported. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | Study concerns tranylcypromine's antileishmanial efficacy with IC50/CC50 values, no phenelzine PK parameters reported. |
| PD | Oualha_2025 | not_relevant | 0 | 0 |  |
| popPK | Pandey_2018 | irrelevant | 0 | 0 | The study focuses on the in-vitro inhibition of MAO by endocannabinoids and does not report pharmacokinetic parameters for phenelzine. |
| PD | Pandey_2018 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for virodhamine, not a pharmacodynamic exposure-response or dose-response relationship for phenelzine. |
| PGx | Polasek_2004 | not_relevant | 0 | 0 | In vitro enzyme inactivation kinetics of phenelzine on CYP2C8; no gene variant/genotype effect on phenelzine PK/PD. |
| PGx | Polasek_2006 | not_relevant | 0 | 0 | In vitro CYP inactivation kinetics by phenelzine; no gene variant/genotype/phenotype effect on PK/PD parameters. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | This is a Cochrane review of ivermectin for COVID-19; phenelzine is not the subject and no PK parameters are reported. |
| PD | Popp_2022 | not_relevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for phenelzine. |
| PGx | Sakata_2013 | not_relevant | 2 | 3 | Genotype-dependent behavioral responses to phenelzine are reported, but no PK parameter or fitted PD effect size is given. |
| popPK | Sherry-McKenna_1994 | irrelevant | 0 | 0 | The study investigates the effect of phenelzine on brain tryptophan levels (pharmacodynamics/mechanism) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Sherry-McKenna_1994 | not_relevant | 4 | 2 | The abstract describes a dose-response study for phenelzine but only provides qualitative results (elevation only at high doses) without reporting specific numeric PD parameters or concentration-effect data in the provided text. |
| popPK | Truong_2025 | irrelevant | 0 | 0 | The paper is a review of caffeine interactions with antidepressants, and phenelzine is only mentioned as a comparator MAOI regarding hypertension risk, with no quantitative PK parameters reported for it. |
| PD | Truong_2025 | not_relevant | 1 | 0 | The paper is a narrative review of caffeine-antidepressant interactions and mentions phenelzine only qualitatively regarding hypertension risk, without providing any numeric PD parameters or concentration-effect data. |
| popPK | Warrington_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacology of moclobemide, with phenelzine serving only as a comparator for pharmacodynamic effects (tyramine threshold) without reporting quantitative PK parameters for phenelzine. |
| PD | Warrington_1991 | not_relevant | 2 | 1 | The paper focuses on moclobemide and only provides a qualitative comparison of tyramine threshold potentiation between moclobemide and phenelzine, without reporting numeric PD parameters or concentration-effect curves for phenelzine. |
| popPK | Yagiela_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of drug interactions in dogs, reporting cardiovascular dose-response curves rather than pharmacokinetic disposition parameters for phenelzine. |
| popPK | Yamada_1993 | irrelevant | 0 | 0 | The study investigates neurochemical effects of iproniazid and nialamide, with phenelzine mentioned only as a qualitative comparator, and contains no pharmacokinetic parameters. |
| PD | Yamada_1993 | not_relevant | 0 | 0 | The paper investigates iproniazid and nialamide, not phenelzine, and only mentions phenelzine qualitatively as a comparator without providing any numeric PD parameters or exposure-response data for it. |
| popPK | Yu_1989 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | This is a text-mining/NLP paper about drug-drug interaction extraction, not a pharmacokinetic study of phenelzine; no PK parameters appear. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper describes a machine learning method for extracting drug-drug interactions from text and does not contain any pharmacodynamic data or analysis for phenelzine. |
| popPK | Ziance_1977 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Ziance_1977 | not_relevant | 0 | 0 | The paper describes in vitro mechanisms of MAO inhibitors on norepinephrine uptake/release in rat brain, not a pharmacokinetic/pharmacodynamic exposure-response or dose-response analysis for phenelzine. |
| popPK | Zimmer_1990 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study comparing MAO inhibition and tyramine pressor effects, not a pharmacokinetic study reporting quantitative disposition parameters for phenelzine. |
| PD | Zimmer_1990 | not_relevant | 3 | 2 | The paper provides qualitative comparisons and relative potency factors (e.g., 1/7th to 1/10th) for phenelzine compared to other drugs, but does not report specific numeric PD parameters (like EC50, Emax, or absolute effect values) or a concentration-effect curve for phenelzine itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
