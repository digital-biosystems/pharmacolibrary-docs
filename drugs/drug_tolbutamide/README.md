<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;tolbutamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolbutamide_Shi2021_reference&quot;,&quot;label&quot;:&quot;Shi_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolbutamide/Tolbutamide_Shi2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tolbutamide

- **generic name:** tolbutamide
- **ATC codes:** `A10BB03`, `V04CA01`
- **DrugBank:** [DB01124](https://go.drugbank.com/drugs/DB01124)
- **groups:** approved

## About

**Description.** Tolbutamide is an oral antihyperglycemic agent used for the treatment of non-insulin-dependent diabetes mellitus (NIDDM). It is structurally similar to acetohexamide, chlorpropamide and tolazamide and belongs to the sulfonylurea class of insulin secretagogues, which act by stimulating β cells of the pancreas to release insulin. Sulfonylureas increase both basal insulin secretion and meal-stimulated insulin release. Medications in this class differ in their dose, rate of absorption, duration of action, route of elimination and binding site on their target pancreatic β cell receptor. Sulfonylureas also increase peripheral glucose utilization, decrease hepatic gluconeogenesis and may increase the number and sensitivity of insulin receptors. Sulfonylureas are associated with weight gain, though less so than insulin. Due to their mechanism of action, sulfonylureas may cause hypoglycemia and require consistent food intake to decrease this risk. The risk of hypoglycemia is increased in elderly, debilitated and malnourished individuals. Tolbutamide appears to be metabolized in the liver. Tolbutamide and its metabolites are excreted in urine (75-85%) and feces.

**Indication.** For treatment of NIDDM (non-insulin-dependent diabetes mellitus) in conjunction with diet and exercise.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 01:59 | 4:49 | 1/0/0 | 1/1/0 | 0/0/0 | 106,690/12,139 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/2 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Shi_2021_reference](drugs/drug_tolbutamide/Tolbutamide_Shi2021_reference.md) | Shi Y et al., Effects of Avitinib on CYP450 Enzyme Ac…, Drug design, development an… (2021) | [10.2147/DDDT.S323186](https://doi.org/10.2147/DDDT.S323186) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jonkers_2001](drugs/drug_tolbutamide/pd_Jonkers_2001_Ca2_i.md) | Jonkers FC et al., Tolbutamide stimulation of pancreatic b…, British journal of pharmaco… (2001) | [10.1038/sj.bjp.0704108](https://doi.org/10.1038/sj.bjp.0704108) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Schwanstecher_1994](drugs/drug_tolbutamide/pd_Schwanstecher_1994_unknown.md) | Schwanstecher M et al., Location of the sulphonylurea receptor…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb17078.x](https://doi.org/10.1111/j.1476-5381.1994.tb17078.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tolbutamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` inhibitor | DrugBank actor |
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor, `SLCO1A2` inhibitor, `SLCO2B1` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…hanged drug and metabolites are eliminated in the urine and feces. Approximately 75-85% of…”</sub> | prose |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inhibitor), ABCC9 (blocker), CYP2C18 (substrate), KCNJ1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kirchheiner_2002.pdf` | Kirchheiner J et al., Impact of CYP2C9 and CYP2C19 polymorphi…, Pharmacogenetics (2002) | popPK | 10 | [10.1097/00008571-200203000-00004](https://doi.org/10.1097/00008571-200203000-00004) | [11875364](https://pubmed.ncbi.nlm.nih.gov/11875364) | The study reports quantitative oral clearance values for tolbutamide across different CYP2C9 genotypes using a population PK model, with specific numeric values provided in the text. |
| `Nishimura_1998_2.pdf` | Nishimura N et al., Effects of Sho-saiko-to on the pharmaco…, The Journal of pharmacy and… (1998) | popPK | 9 | [10.1111/j.2042-7158.1998.tb06181.x](https://doi.org/10.1111/j.2042-7158.1998.tb06181.x) | [9530993](https://pubmed.ncbi.nlm.nih.gov/9530993) | The study reports a two-compartment PK model for tolbutamide in rats, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| `Horiuchi_2014.pdf` | Horiuchi M et al., Effects of peritoneal dialysis on pharm…, Drug metabolism and pharmac… (2014) | popPK | 8 | [10.2133/dmpk.dmpk-13-rg-067](https://doi.org/10.2133/dmpk.dmpk-13-rg-067) | [24025988](https://pubmed.ncbi.nlm.nih.gov/24025988) | The study reports a compartmental PK model for tolbutamide in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| `Jayasagar_2000.pdf` | Jayasagar G et al., Effect of clarithromycin on the pharmac…, Drug metabolism and drug in… (2000) | popPK | 8 | [10.1515/dmdi.2000.16.3.207](https://doi.org/10.1515/dmdi.2000.16.3.207) | [11116754](https://pubmed.ncbi.nlm.nih.gov/11116754) | The study reports PK parameters for tolbutamide, but only provides percentage changes (20% increase in ka, 26% in bioavailability) rather than absolute numeric values for clearance, volume, or rate constants. |

<sub>queue written 2026-09-16T01:56:26.421841+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akiyoshi_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of channel inhibition where tolbutamide serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | De_1996 | irrelevant | 0 | 0 | The study focuses on glucose kinetics parameters using tolbutamide only as a co-administered agent to improve model stability, not on tolbutamide's pharmacokinetics. |
| popPK | Dixit_1999 | irrelevant | 2 | 0 | The study focuses on the interaction with diltiazem and reports only relative changes (10% increase) in AUC and Cmax without providing absolute quantitative disposition parameters (CL, V, t1/2) for tolbutamide. |
| popPK | González_2001 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay for glibenclamide where tolbutamide is used only as a competitive displacer, not a subject of pharmacokinetic analysis. |
| PD | González_2001 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding kinetics (KD, Bmax) for glibenclamide and competition data for tolbutamide, but does not report a pharmacodynamic exposure-response or dose-response relationship for tolbutamide in vivo or in a functional assay. |
| popPK | Hogg_2001 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of K(ATP) channels in rat neurones where tolbutamide is used only as a pharmacological inhibitor, not as a subject for pharmacokinetic analysis. |
| PD | Hogg_2001 | not_relevant | 4 | 3 | The paper reports an IC50 for tolbutamide (100 µM) in a small-n electrophysiology study, but it is a single-point inhibition value rather than a full concentration-effect curve or PK/PD model, making it a weak case for extractable PD parameters compared to formal models. |
| popPK | Horiuchi_2014 | relevant | 8 | 0 | The study reports a compartmental PK model for tolbutamide in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Jayasagar_2000 | relevant | 8 | 2 | The study reports PK parameters for tolbutamide, but only provides percentage changes (20% increase in ka, 26% in bioavailability) rather than absolute numeric values for clearance, volume, or rate constants. |
| popPK | Jonkers_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tolbutamide's effect on intracellular calcium in mouse beta-cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lee_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of tolbutamide on pressor responses and does not report any pharmacokinetic parameters. |
| popPK | Melnick_2011 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper investigating glucose sensing in neurons, using tolbutamide only as a pharmacological tool to block K(ATP) channels, with no pharmacokinetic parameters reported. |
| PD | Melnick_2011 | not_relevant | 1 | 0 | The paper reports glucose concentration-response parameters (EC50, Hill slope) for hypothalamic neurons, but tolbutamide is only used qualitatively to test K_ATP channel involvement without providing numeric PD parameters for the drug itself. |
| popPK | Nishimura_1998_2 | relevant | 9 | 2 | The study reports a two-compartment PK model for tolbutamide in rats, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| popPK | Patanè_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of glucose sensitivity in rat islets where tolbutamide is used only as a negative control, and no pharmacokinetic parameters are reported. |
| PD | Patanè_2000 | not_relevant | 0 | 0 | The paper reports a glucose dose-response relationship for glibenclamide, but explicitly states that tolbutamide did not show an effect, and provides no numeric PD parameters for tolbutamide. |
| popPK | Prendergast_1984 | irrelevant | 0 | 0 | The paper is a review of glyburide and glipizide, and tolbutamide is only mentioned as a comparator for efficacy, with no pharmacokinetic parameters reported for it. |
| popPK | Schwanstecher_1994 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology and binding study on pancreatic beta-cells, not a pharmacokinetic study, and reports no disposition parameters for tolbutamide. |
| popPK | Shi_2021 | irrelevant | 2 | 8 | Tolbutamide is used as a probe substrate to assess CYP2C11 activity in a drug-drug interaction study, not as the subject drug for PK characterization. |
| popPK | So_2020 | irrelevant | 0 | 0 | The paper is an electrophysiology study on pterostilbene where tolbutamide is used only as a pharmacological tool to block KATP channels, not as a subject for PK analysis. |
| PD | So_2020 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, EC50) for pterostilbene, not tolbutamide; tolbutamide is only used as a negative control. |
| popPK | Verspohl_1982 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insulin secretion where tolbutamide is used as a stimulant, not a pharmacokinetic study reporting disposition parameters. |
| PD | Verspohl_1982 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for the inhibitory effect of exogenous insulin on insulin secretion, not for tolbutamide itself; tolbutamide is only used as a stimulator to test the mechanism of insulin's inhibition. |
| popPK | Walzer_2012 | irrelevant | 1 | 0 | Tolbutamide is used only as a CYP2C9 probe substrate to assess drug-drug interactions with clobazam, and no quantitative PK parameters for tolbutamide are reported. |
| popPK | Wosilait_1981 | irrelevant | 0 | 0 | The study focuses on warfarin binding and uses tolbutamide only as a competitive displacing agent in an in-vitro system, without reporting PK parameters for tolbutamide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-16 01:55 UTC</sub>
