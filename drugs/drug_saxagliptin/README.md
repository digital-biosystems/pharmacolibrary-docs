<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;saxagliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Saxagliptin_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_saxagliptin/Saxagliptin_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# saxagliptin

- **generic name:** saxagliptin
- **ATC codes:** `A10BD10`, `A10BD21`, `A10BD25`, `A10BH03`
- **DrugBank:** [DB06335](https://go.drugbank.com/drugs/DB06335)
- **groups:** approved, investigational

## About

**Description.** Saxagliptin (rINN) is an orally active hypoglycemic (anti-diabetic drug) of the new dipeptidyl peptidase-4 (DPP-4) inhibitor class of drugs. FDA approved on July 31, 2009.

**Indication.** Treatment of type 2 diabetes mellitus to improve glycemic control in combination with other agents or as monotherapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 19:38 | 6:34 | 0/0/1 | 1/0/0 | 0/0/0 | 165,884/10,153 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 1/7 | 6/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.926). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2024_reference](drugs/drug_saxagliptin/Saxagliptin_Wang2024_reference.md) | Wang T et al., Pharmacokinetic/Pharmacodynamic modelli…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00757-3](https://doi.org/10.1186/s40360-024-00757-3) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Wang_2024](drugs/drug_saxagliptin/pd_Wang_2024_DPP_4.md) | Wang T et al., Pharmacokinetic/Pharmacodynamic modelli…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00757-3](https://doi.org/10.1186/s40360-024-00757-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=saxagliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…l of 22% of the administered radioactivity was recovered in feces representing the fractio…”</sub> | prose |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |
| excretion | liver | <sub>“…Saxagliptin is eliminated by both renal and hepatic pathways. Following a single 50 mg dos…”</sub> | prose |
| excretion | small intestine | <sub>“…iptin dose excreted in bile and/or unabsorbed drug from the gastrointestinal tract.…”</sub> | prose |

<sub>Actors without a tissue in the table: DPP4 (inhibitor), SLCO4C1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Liu_2022.pdf` | Liu Q et al., Effects of 27 CYP3A4 protein variants o…, Fundamental & clinical phar… (2022) | pgx | 8 | [10.1111/fcp.12693](https://doi.org/10.1111/fcp.12693) | [33961299](https://www.ncbi.nlm.nih.gov/pubmed/33961299) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Su_2012.pdf` | Su H et al., Characterization of the in vitro and in…, Drug metabolism and disposi… (2012) | pgx | 8 | [10.1124/dmd.112.045450](https://doi.org/10.1124/dmd.112.045450) | [22496391](https://www.ncbi.nlm.nih.gov/pubmed/22496391) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ali_2013.pdf` | Ali S et al., Saxagliptin overview: special focus on…, Expert opinion on drug safe… (2013) | pgx | 7 | [10.1517/14740338.2013.741584](https://doi.org/10.1517/14740338.2013.741584) | [23137182](https://www.ncbi.nlm.nih.gov/pubmed/23137182) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dai_2024.pdf` | Dai GX et al., Differential inhibition of sildenafil a…, Toxicology and applied phar… (2024) | pgx | 7 | [10.1016/j.taap.2024.116934](https://doi.org/10.1016/j.taap.2024.116934) | [38663673](https://www.ncbi.nlm.nih.gov/pubmed/38663673) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Filippatos_2014.pdf` | Filippatos TD et al., The pharmacokinetic considerations and…, Expert opinion on drug meta… (2014) | pgx | 7 | [10.1517/17425255.2014.907274](https://doi.org/10.1517/17425255.2014.907274) | [24746233](https://www.ncbi.nlm.nih.gov/pubmed/24746233) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Gao_2013.pdf` | Gao J et al., Influences of processed rhubarbs on the…, Journal of ethnopharmacology (2013) | pgx | 7 | [10.1016/j.jep.2012.11.030](https://doi.org/10.1016/j.jep.2012.11.030) | [23207062](https://www.ncbi.nlm.nih.gov/pubmed/23207062) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2024.pdf` | Lee JM et al., Physiologically Based Pharmacokinetic (…, Pharmaceutics (2024) | pgx | 7 | [10.3390/pharmaceutics16020280](https://doi.org/10.3390/pharmaceutics16020280) | [38399334](https://www.ncbi.nlm.nih.gov/pubmed/38399334) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Patel_2011.pdf` | Patel CG et al., Two-way pharmacokinetic interaction stu…, Clinical pharmacology : adv… (2011) | pgx | 7 | [10.2147/CPAA.S15227](https://doi.org/10.2147/CPAA.S15227) | [22287853](https://www.ncbi.nlm.nih.gov/pubmed/22287853) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Song_2026.pdf` | Song IS et al., Identification of Reactive Metabolites…, Pharmaceutics (2026) | pgx | 7 | [10.3390/pharmaceutics18040483](https://doi.org/10.3390/pharmaceutics18040483) | [42076134](https://www.ncbi.nlm.nih.gov/pubmed/42076134) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Upreti_2011.pdf` | Upreti VV et al., Effect of rifampicin on the pharmacokin…, British journal of clinical… (2011) | pgx | 7 | [10.1111/j.1365-2125.2011.03937.x](https://doi.org/10.1111/j.1365-2125.2011.03937.x) | [21651615](https://www.ncbi.nlm.nih.gov/pubmed/21651615) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-18T19:32:04.751131+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ali_2013 | not_relevant | 0 | 0 | The paper is a general safety and efficacy review that discusses drug-drug interactions (CYP3A4) and organ impairment, but does not report pharmacogenomic effects of specific gene variants on saxagliptin PK/PD. |
| popPK | Anderson_2016 | relevant | 4 | 6 | The paper is a review that reports specific quantitative PK parameters for saxagliptin (Vd 151L, Cmax 25.7 ng/mL, AUC range, metabolite half-life) directly in the text, but lacks a compartmental model or clearance values. |
| PD | Anderson_2016 | not_relevant | 1 | 0 | The text is a review abstract that qualitatively summarizes clinical efficacy and PK/PD properties without reporting specific numeric PD parameters or exposure-response models. |
| PGx | Butrovich_2022 | not_relevant | 0 | 0 | The paper investigates the impact of chronic kidney disease (a disease state) on saxagliptin PK using PBPK modeling, not the effect of a specific gene variant or genotype. |
| PGx | Dai_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (sildenafil/macitentan) affecting saxagliptin PK, not pharmacogenomic effects of gene variants. |
| PGx | Dave_2011 | not_relevant | 0 | 0 | The text is a general review of saxagliptin's mechanism and clinical use, mentioning renal impairment and CYP3A4 inhibitors but containing no data on gene variants or pharmacogenomic effects. |
| PGx | Filippatos_2014 | not_relevant | 0 | 0 | The paper is a general review of DPP-4 inhibitors' pharmacokinetics and safety, mentioning saxagliptin's CYP3A4 metabolism but not reporting any specific gene variant or genotype effects on PK/PD parameters. |
| PGx | Gao_2013 | not_relevant | 0 | 0 | The study investigates the effect of herbal extracts (processed rhubarbs) on drug metabolism, not the effect of a gene variant or genotype. |
| popPK | Gibbs_2012 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy (HbA1c response) and DPP-4 inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume for saxagliptin. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper is a general review of DPP-4 inhibitor pharmacokinetics and does not report any gene variant or genotype effects on saxagliptin PK/PD parameters. |
| PGx | Hernández-Lorca_2025 | not_relevant | 2 | 1 | The paper is a narrative review focusing on dietary modulation of CYP3A4 and mentions saxagliptin only as an example of a substrate, without reporting specific pharmacogenomic effect sizes or quantitative PK/PD changes linked to gene variants. |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that SLCO1B1 polymorphism is unlikely to affect saxagliptin because the liver is not important for its elimination or action. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (CYP3A inhibition) using PBPK modeling, not a pharmacogenomic effect (gene variant/genotype) on saxagliptin PK/PD. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (CYP3A4 inhibitors/inducers) and does not report pharmacogenomic effects of gene variants on saxagliptin PK/PD. |
| PGx | Mansour_2022 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (sildenafil) and does not report any pharmacogenomic effects (gene variants) on saxagliptin PK/PD. |
| PGx | Patel_2011 | not_relevant | 0 | 0 | The paper reports drug-drug interactions with CYP3A4 inhibitors/substrates, not pharmacogenomic effects based on genetic variants. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (pharmacokinetic interference by other drugs) rather than pharmacogenomic effects (gene variants) on saxagliptin PK/PD. |
| PGx | Sivadas_2024 | not_relevant | 2 | 0 | The paper reports population allele frequencies and predicted drug-drug-gene interactions for saxagliptin, but does not report measured pharmacokinetic or pharmacodynamic parameters or fitted effect sizes for specific genotypes. |
| PGx | Song_2026 | not_relevant | 0 | 0 | The study focuses on identifying reactive metabolites in in vitro models (hepatocytes/organoids) and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Su_2012 | not_relevant | 0 | 0 | The paper discusses the potential impact of CYP3A5 polymorphism but concludes it is unlikely to affect clearance, and does not report a measured pharmacogenomic effect on PK parameters. |
| popPK | Tatosian_2013 | relevant | 8 | 2 | The study reports non-compartmental PK parameters for saxagliptin, but the specific numeric values in Table 2 are cut off in the provided evidence. |
| PGx | Upreti_2011 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampicin) rather than a pharmacogenomic effect (gene variant/genotype). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 19:32 UTC</sub>
