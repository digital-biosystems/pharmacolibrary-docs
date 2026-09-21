<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glipizide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glipizide_Dhawan2006_healthy_male_volunteers&quot;,&quot;label&quot;:&quot;Dhawan_2006_healthy male volunteers&quot;,&quot;href&quot;:&quot;drugs/drug_glipizide/Glipizide_Dhawan2006_healthy_male_volunteers.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# glipizide

- **generic name:** glipizide
- **ATC codes:** `A10BB07`
- **DrugBank:** [DB01067](https://go.drugbank.com/drugs/DB01067)
- **groups:** approved, investigational

## About

**Description.** Glipizide is an oral hypoglycemic agent in the second-generation sulfonylurea drug class that is used to control blood sugar levels in patients with type 2 diabetes mellitus. It was first introduced in 1984 [A179491] and is available in various countries including Canada and the U.S. According to the 2018 Clinical Practice Guidelines by Diabetes Canada, sulfonylurea drugs are considered a second-line glucose-lowering therapy following metformin.[L6712] Because sulfonylureas require functional pancreatic beta cells for their therapeutic effectiveness, sulfonylureas are more commonly used for early-stage type 2 diabetes when there is no progressed pancreatic failure.[T28] Compared to the first-generation sulfonylureas, such as [tolbutamide] and [chlorpropamide], second-generation sulfonylureas contain a more non-polar side chain in their chemical structure, which enhances their hypoglycemic potency.[A179488] Compared to other members of the sulfonylurea drug group, glipizide displays rapid absorption and onset of action with the shortest half-life and duration of action, reducing the risk for long-lasting hypoglycemia that is often observed with blood glucose-lowering agents.[A179485] Glipizide was first approved by the FDA in 1994 and is available in extended-release tablets under the brand name Glucotrol®, as well as in combination with metformin under the brand name Metaglip®.

**Indication.** Indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.[label]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 22:02 | 3:05 | 0/0/0 | 1/0/0 | 0/0/0 | 79,585/4,117 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Dhawan_2006_healthy male volunteers](drugs/drug_glipizide/Glipizide_Dhawan2006_healthy_male_volunteers.md) | Dhawan S et al., Bioavailability of immediate- and exten…, Clinical pharmacokinetics (2006) | [10.2165/00003088-200645030-00007](https://doi.org/10.2165/00003088-200645030-00007) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barrett-Jolley_1998](drugs/drug_glipizide/pd_Barrett_Jolley_1998_unknown.md) | Barrett-Jolley R et al., Characterization of K(ATP) channels in…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0701727](https://doi.org/10.1038/sj.bjp.0701727) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glipizide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Gastrointestinal absorption of glipizide is uniform, rapid, and essentially…”</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…e initial dose of the drug can be detected in the urine and feces as unchanged glipizide.…”</sub> | prose |
| excretion | kidney | <sub>“…10% of the initial dose of the drug can be detected in the urine and feces as unchanged gl…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inhibitor), KCNJ10 (blocker), PPARG (target).</sub>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huupponen_1982.pdf` | Huupponen R et al., Glipizide pharmacokinetics and response…, International journal of cl… (1982) | popPK | 10 | not captured | [6754633](https://pubmed.ncbi.nlm.nih.gov/6754633) | The text explicitly reports quantitative pharmacokinetic parameters for glipizide, including half-life (4.7 h), volume of distribution (17.0 l), and clearance (41.6 ml/min). |
| `Wåhlin-Boll_1982.pdf` | Wåhlin-Boll E et al., Bioavailability, pharmacokinetics and e…, Clinical pharmacokinetics (1982) | popPK | 10 | [10.2165/00003088-198207040-00006](https://doi.org/10.2165/00003088-198207040-00006) | [7116738](https://pubmed.ncbi.nlm.nih.gov/7116738) | Quantitative compartmental PK parameters for glipizide are fully reported in clearly formatted tables within the main text, requiring no external supplementary material. |
| `Chen_1995.pdf` | Chen QC et al., [Pharmacokinetics and bioavailability o…, Yao xue xue bao = Acta phar… (1995) | popPK | 9 | not captured | [7572185](https://pubmed.ncbi.nlm.nih.gov/7572185) | The study reports quantitative PK parameters for glipizide, but the specific numeric values are in Tables 2 and 3 which are not included in the provided evidence. |
| `Pentikäinen_1983.pdf` | Pentikäinen PJ et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1983) | popPK | 9 | not captured | [6341263](https://pubmed.ncbi.nlm.nih.gov/6341263) | The abstract directly reports quantitative compartmental pharmacokinetic parameters (CL, Vc, Vss, t1/2) for glipizide in humans. |
| `Dhawan_2006.pdf` | Dhawan S et al., Bioavailability of immediate- and exten…, Clinical pharmacokinetics (2006) | popPK | 7 | [10.2165/00003088-200645030-00007](https://doi.org/10.2165/00003088-200645030-00007) | [16509763](https://pubmed.ncbi.nlm.nih.gov/16509763) | All quantitative PK parameters are directly readable in the provided text and tables, with no reliance on missing supplementary material or figures. |

<sub>queue written 2026-09-15T21:59:57.046531+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett-Jolley_1998 | irrelevant | 0 | 0 | The paper is an electrophysiological study of K-ATP channels in rat skeletal muscle where glipizide is used only as a pharmacological antagonist to determine channel potency (IC50), not as a subject for pharmacokinetic analysis. |
| popPK | Chen_1995 | relevant | 9 | 0 | The study reports quantitative PK parameters for glipizide, but the specific numeric values are in Tables 2 and 3 which are not included in the provided evidence. |
| popPK | Dorsey-Trevino_2022 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of GLP1R polymorphisms using glipizide only as a challenge agent to measure insulin response, and it does not report any pharmacokinetic parameters for glipizide. |
| popPK | Fan_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation where glipizide is used solely as a pharmacological tool to block K(ATP) channels, not as a subject drug for PK analysis. |
| PD | Fan_2007 | not_relevant | 0 | 0 | The paper studies the pharmacology of acetylcholine (ACh) and uses glipizide only as a qualitative tool to block K_ATP channels; it does not report a dose-response or exposure-response relationship for glipizide itself. |
| popPK | González_2001 | irrelevant | 0 | 0 | The study is an in-vitro binding assay for glibenclamide where glipizide is only used as a competitive displacer, reporting no pharmacokinetic parameters. |
| PD | González_2001 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding kinetics (KD, Bmax) for glibenclamide and glipizide, not in vivo pharmacodynamic exposure-response or dose-response relationships for glipizide. |
| popPK | Jiang_2004 | irrelevant | 0 | 0 | The study is an in-vitro physiological investigation of nitric oxide in guinea pig arteries where glipizide is used only as a pharmacological tool to block K-ATP channels, not as the subject of a pharmacokinetic analysis. |
| PD | Jiang_2004 | not_relevant | 0 | 0 | The paper reports an EC50 for nitric oxide (NO) on K(ATP) channels, not for glipizide; glipizide is used only as a control agent with a single qualitative/numeric effect measurement, lacking a dose-response curve or PD model for the drug itself. |
| popPK | Kim_2022 | relevant | 10 | 0 | The study is relevant but the specific numeric pharmacokinetic parameter values are not present in the provided text extract. |
| popPK | Lechuga_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gluconeogenesis in hepatocytes, not a pharmacokinetic study reporting disposition parameters for glipizide. |
| popPK | Nielsen-Kudsk_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular smooth muscle relaxation, not a pharmacokinetic study, and reports no disposition parameters for glipizide. |
| popPK | OMeara_1990 | irrelevant | 0 | 0 | The paper focuses on glyburide and insulin secretion kinetics, mentioning glipizide only as a clinical comparator without reporting any pharmacokinetic parameters for it. |
| popPK | Prendergast_1984 | irrelevant | 2 | 1 | This is a clinical review article that only provides a general half-life range and lacks original quantitative population-pharmacokinetic parameters or data tables. |
| popPK | Ronner_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and binding assay of a different drug (AZ-DF-265), with glipizide mentioned only as a comparator for partition coefficients and channel inhibition, providing no pharmacokinetic parameters. |
| PD | Ronner_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of (-)-AZ-DF-265, not glipizide; glipizide is only mentioned as a reference for partition coefficients. |
| popPK | Si_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation where glipizide is used solely as a pharmacological blocker of K(ATP) channels, not as the subject of pharmacokinetic analysis. |
| PD | Si_2002 | not_relevant | 0 | 0 | The paper reports an EC50 for the NO donor DPTA-NONOate and pinacidil, but glipizide is used only as a qualitative blocker to identify the channel type, with no dose-response curve or numeric PD parameters reported for glipizide itself. |
| popPK | Steinberg_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of pinacidil enantiomers in canine tissues where glipizide is used only as a comparative antagonist, with no pharmacokinetic parameters reported. |
| PD | Steinberg_1991 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for pinacidil and its isomers, and qualitatively describes antagonism by glipizide, but does not provide numeric PD parameters or a quantitative exposure-response relationship for glipizide itself. |
| popPK | Yeung_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of potassium channel modulation in mouse ileum, not a pharmacokinetic study, and glipizide is used only as a comparator antagonist. |
| PD | Yeung_2002 | not_relevant | 0 | 0 | The paper investigates the antagonistic effect of glipizide on potassium channel openers in an in-vitro mouse ileum preparation, not the pharmacodynamic exposure-response relationship of glipizide itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_glipizide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
