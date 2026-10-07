<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;tizanidine&quot;}]"></div>

# tizanidine

- **generic name:** tizanidine
- **ATC codes:** `M03BX02`
- **DrugBank:** [DB00697](https://go.drugbank.com/drugs/DB00697) · **PubChem:** [CID 5487](https://pubchem.ncbi.nlm.nih.gov/compound/5487)
- **molar mass:** 253.711 g/mol (C9H8ClN5S) — DrugBank
- **groups:** approved, investigational

## About

Tizanidine is a centrally acting muscle relaxant used to treat muscle spasticity, spasms, and related painful conditions such as lower back pain and muscle cramps. It is an approved medication that is widely used for these indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423538](https://www.wikidata.org/wiki/Q423538) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:59 | 4:41 | 0/0/0 | 0/0/0 | 0/0/0 | 40,930/1,939 | einfracz / qwen3.8-27b | 6 | 6/0 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tizanidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), NISCH (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 77 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Neuvonen_2012.pdf` | Neuvonen PJ, Towards safer and more predictable drug…, Basic & clinical pharmacolo… (2012) | pgx | 8 | [10.1111/j.1742-7843.2012.00858.x](https://doi.org/10.1111/j.1742-7843.2012.00858.x) | [22348413](https://www.ncbi.nlm.nih.gov/pubmed/22348413) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Backman_2006.pdf` | Backman JT et al., Rofecoxib is a potent inhibitor of cyto…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02653.x](https://doi.org/10.1111/j.1365-2125.2006.02653.x) | [16934051](https://www.ncbi.nlm.nih.gov/pubmed/16934051) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Chang_2009.pdf` | Chang SY et al., Further assessment of 17alpha-ethinyl e…, Drug metabolism and disposi… (2009) | pgx | 7 | [10.1124/dmd.109.026997](https://doi.org/10.1124/dmd.109.026997) | [19454483](https://www.ncbi.nlm.nih.gov/pubmed/19454483) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Chaugai_2019.pdf` | Chaugai S et al., Co-Prescription of Strong CYP1A2 Inhibi…, Clinical pharmacology and t… (2019) | pgx | 7 | [10.1002/cpt.1233](https://doi.org/10.1002/cpt.1233) | [30223305](https://www.ncbi.nlm.nih.gov/pubmed/30223305) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Granfors_2004.pdf` | Granfors MT et al., Tizanidine is mainly metabolized by cyt…, British journal of clinical… (2004) | pgx | 7 | [10.1046/j.1365-2125.2003.02028.x](https://doi.org/10.1046/j.1365-2125.2003.02028.x) | [14998432](https://www.ncbi.nlm.nih.gov/pubmed/14998432) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Haraya_2016.pdf` | Haraya K et al., Prediction of inter-individual variabil…, Drug metabolism and pharmac… (2016) | pgx | 7 | [10.1016/j.dmpk.2016.03.003](https://doi.org/10.1016/j.dmpk.2016.03.003) | [27318879](https://www.ncbi.nlm.nih.gov/pubmed/27318879) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Karjalainen_2007.pdf` | Karjalainen MJ et al., Tolfenamic acid is a potent CYP1A2 inhi…, European journal of clinica… (2007) | pgx | 7 | [10.1007/s00228-007-0335-z](https://doi.org/10.1007/s00228-007-0335-z) | [17618427](https://www.ncbi.nlm.nih.gov/pubmed/17618427) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Karjalainen_2008.pdf` | Karjalainen MJ et al., Celecoxib is a CYP1A2 inhibitor in vitr…, European journal of clinica… (2008) | pgx | 7 | [10.1007/s00228-007-0456-4](https://doi.org/10.1007/s00228-007-0456-4) | [18197403](https://www.ncbi.nlm.nih.gov/pubmed/18197403) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Wang_2009.pdf` | Wang B et al., Synthetic and natural compounds that in…, Current medicinal chemistry (2009) | pgx | 7 | [10.2174/092986709789378198](https://doi.org/10.2174/092986709789378198) | [19754423](https://www.ncbi.nlm.nih.gov/pubmed/19754423) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Zhang_2017.pdf` | Zhang W et al., Clinical Pharmacokinetics of Vemurafenib, Clinical pharmacokinetics (2017) | pgx | 7 | [10.1007/s40262-017-0523-7](https://doi.org/10.1007/s40262-017-0523-7) | [28255850](https://www.ncbi.nlm.nih.gov/pubmed/28255850) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Zhang_2020.pdf` | Zhang W et al., Effect of Vemurafenib on the Pharmacoki…, Clinical pharmacology in dr… (2020) | pgx | 7 | [10.1002/cpdd.788](https://doi.org/10.1002/cpdd.788) | [32311241](https://www.ncbi.nlm.nih.gov/pubmed/32311241) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T02:59:25.067039+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Backman_2006 | not_relevant | 0 | 0 | The paper studies rofecoxib as a CYP1A2 inhibitor using tizanidine as a probe, not the effect of a gene variant on tizanidine's PK/PD. |
| popPK | Beltrán-Villalobos_2014 | irrelevant | 0 | 0 | The study evaluates antinociceptive pharmacodynamics in rats and does not report quantitative pharmacokinetic parameters. |
| PGx | Chang_2009 | not_relevant | 0 | 0 | The paper focuses on the inhibition of CYP450 forms by ethinyl estradiol and does not report pharmacogenomic effects on tizanidine. |
| PGx | Chaugai_2019 | not_relevant | 1 | 0 | The paper investigates drug-drug interactions (CYP1A2 inhibitors), not pharmacogenomic effects of genetic variants or phenotypes. |
| PGx | Giannouchos_2022 | not_relevant | 2 | 0 | The study examines a drug-drug interaction (ciprofloxacin/tizanidine) rather than the effect of a specific gene variant or genotype on tizanidine's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Goyal_2022 | not_relevant | 1 | 0 | The paper reports a drug-drug interaction (CYP1A2 inhibition by ciprofloxacin), not a pharmacogenomic effect (gene variant/genotype) on pharmacokinetics. |
| PGx | Granfors_2004 | not_relevant | 0 | 0 | The provided text describes the primary metabolic enzyme for tizanidine but does not report a specific pharmacogenomic effect (e.g., variant impact) on a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Granfors_2004_2 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (fluvoxamine), not a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Haraya_2016 | not_relevant | 0 | 0 | The study focuses on environmental factors and overall inter-individual variability (CV) of CYP1A2, not on specific genetic variants affecting tizanidine pharmacokinetics. |
| PGx | Kaddar_2012 | not_relevant | 0 | 0 | The study evaluates the cardiotoxicity of tizanidine in animal models without investigating any genetic variants or pharmacogenomic effects on PK/PD. |
| PGx | Kanacher_2020 | not_relevant | 2 | 2 | The paper focuses on PBPK modeling for drug-drug interactions (DDI), and while it uses tizanidine data for qualification, it does not report a primary pharmacogenomic effect or fitted genotype-specific parameters for tizanidine itself. |
| PGx | Karjalainen_2007 | not_relevant | 0 | 0 | The paper discusses a drug interaction between tolfenamic acid and CYP1A2 substrates, not a pharmacogenomic effect on tizanidine. |
| PGx | Karjalainen_2008 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction (celecoxib vs. tizanidine) and contains no genetic variants or pharmacogenomic data. |
| PGx | Karjalainen_2008_2 | not_relevant | 0 | 0 | The paper studies in vitro inhibition of CYP1A2 by drugs and predicts drug-drug interactions, but does not investigate pharmacogenomic (genetic) effects. |
| PGx | Locuson_2016 | not_relevant | 0 | 0 | The paper evaluates tizanidine as a probe for CYP1A2 enzyme activity in dogs and assesses the impact of an inhibitor (enrofloxacin), but it does not report effects of specific gene variants or genotypes on tizanidine pharmacokinetics. |
| PGx | Momo_2010 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (mexiletine inhibiting CYP1A2), not a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Momo_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP1A2 inhibition) and does not report any pharmacogenomic effects of gene variants on tizanidine's PK or PD. |
| PGx | Moody_2018 | not_relevant | 0 | 0 | The study reports in vitro inhibition of opioid metabolism by tizanidine, which is a drug-drug interaction study, not a pharmacogenomic study investigating the effect of gene variants on tizanidine's PK or PD parameters. |
| PGx | Neuvonen_2012 | not_relevant | 0 | 0 | The text is a general reflection on safer drug treatment and does not mention tizanidine or specific pharmacogenomic effects. |
| PGx | Rudolph_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ciprofloxacin inhibiting CYP1A2 metabolism of tizanidine), not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Siarey_1992 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of synaptic transmission in rat spinal cord, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for tizanidine. |
| PGx | Srinivas_2013 | not_relevant | 0 | 0 | The paper reviews cranberry-drug interactions (pharmacokinetics/dynamics) and does not report any pharmacogenomic effects based on gene variants or genotypes. |
| PGx | Wang_2009 | not_relevant | 0 | 0 | This paper focuses on CYP1A2 interactions in drug development and does not report pharmacogenomic effects on tizanidine's PK/PD. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of vemurafenib, not tizanidine. |
| PGx | Zhang_2017 | not_relevant | 0 | 0 | The text discusses the pharmacokinetics of vemurafenib and does not mention tizanidine or any pharmacogenomic effects. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (vemurafenib inhibiting CYP1A2 metabolism of tizanidine) in a genetically selected population, but does not report how a specific gene variant affects tizanidine's PK/PD parameters. |
| PGx | Zhou_2009 | not_relevant | 3 | 0 | The paper mentions tizanidine as a substrate of CYP1A2 but does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to tizanidine in relation to the gene variant. |
| PGx | Zhou_2010 | not_relevant | 2 | 0 | The paper is a general review of CYP1A2 structure and function that mentions tizanidine as a substrate but does not report specific quantitative pharmacogenomic effects (e.g., PK parameter changes by genotype) for tizanidine. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP1A2 inhibitors) and safety comparisons but does not report pharmacogenomic effects (gene variants/polymorphisms) on tizanidine PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
