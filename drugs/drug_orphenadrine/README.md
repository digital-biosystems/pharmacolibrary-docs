<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;Orphenadrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Orphenadrine_Elghazali2008_reference&quot;,&quot;label&quot;:&quot;Elghazali_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_orphenadrine/Orphenadrine_Elghazali2008_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Orphenadrine

- **generic name:** Orphenadrine
- **ATC codes:** `M03BC01`, `N04AB02`
- **DrugBank:** [DB01173](https://go.drugbank.com/drugs/DB01173) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Orphenadrine is a centrally acting muscle relaxant and anticholinergic drug used for painful muscle spasms, cramps, and spastic conditions, and also as an antiparkinson agent. It remains an approved medicine, used mainly for musculoskeletal and neurological indications, though not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3292273](https://www.wikidata.org/wiki/Q3292273) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| orphenadrine | parent | 269.388 | C18H23NO | PubChem | [4601](https://pubchem.ncbi.nlm.nih.gov/compound/4601) | Elghazali_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:38 | 6:59 | 1/0/0 | 2/0/0 | 0/0/0 | 88,430/6,033 | einfracz / qwen3.8-27b | 4 | 1/1 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span> | [Elghazali_2008_reference](drugs/drug_orphenadrine/Orphenadrine_Elghazali2008_reference.md) | ▶ model + simulator | 1-compartment, IV | 6 | Elghazali M et al., Pharmacokinetic, metabolism and withdra…, Research in veterinary scie… (2008) | [10.1016/j.rvsc.2008.01.006](https://doi.org/10.1016/j.rvsc.2008.01.006) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kornhuber_1995_open_channel_blocking_kinetics](drugs/drug_orphenadrine/pd_Kornhuber_1995_open_channel_blocking_kinetics.md) | open channel blocking kinetics ← orphenadrine · target-mediated drug disposition | — | Kornhuber J et al., Orphenadrine is an uncompetitive N-meth…, Journal of neural transmiss… (1995) | [10.1007/BF01281158](https://doi.org/10.1007/BF01281158) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kornhuber_1995_steady_state_currents](drugs/drug_orphenadrine/pd_Kornhuber_1995_steady_state_currents.md) | steady state currents ← orphenadrine · direct Emax (saturable) effect | — | Kornhuber J et al., Orphenadrine is an uncompetitive N-meth…, Journal of neural transmiss… (1995) | [10.1007/BF01281158](https://doi.org/10.1007/BF01281158) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reidy_1989_16_beta_hydroxylase](drugs/drug_orphenadrine/pd_Reidy_1989_16_beta_hydroxylase.md) | androstenedione 16 beta-hydroxylase activity ← orphenadrine · inhibition effect | — | Reidy GF et al., Inhibition of oxidative drug metabolism…, Molecular pharmacology (1989) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reidy_1989_16_beta_hydroxylase_2](drugs/drug_orphenadrine/pd_Reidy_1989_16_beta_hydroxylase_2.md) | androstenedione 16 beta-hydroxylase activity ← orphenadrine · inhibition effect | — | Reidy GF et al., Inhibition of oxidative drug metabolism…, Molecular pharmacology (1989) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reidy_1989_pentoxyresorufin_O_depentylation](drugs/drug_orphenadrine/pd_Reidy_1989_pentoxyresorufin_O_depentylation.md) | pentoxyresorufin O-depentylation ← orphenadrine · inhibition effect | — | Reidy GF et al., Inhibition of oxidative drug metabolism…, Molecular pharmacology (1989) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reidy_1989_pentoxyresorufin_O_depentylation_2](drugs/drug_orphenadrine/pd_Reidy_1989_pentoxyresorufin_O_depentylation_2.md) | pentoxyresorufin O-depentylation ← orphenadrine · inhibition effect | — | Reidy GF et al., Inhibition of oxidative drug metabolism…, Molecular pharmacology (1989) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=orphenadrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GRIN1 (target), GRIN2D (target), GRIN3A (target), GRIN3B (target), HRH1 (target), SCN10A (inhibitor), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 62 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elghazali_2008.pdf` | Elghazali M et al., Pharmacokinetic, metabolism and withdra…, Research in veterinary scie… (2008) | popPK | 10 | [10.1016/j.rvsc.2008.01.006](https://doi.org/10.1016/j.rvsc.2008.01.006) | [18321539](https://pubmed.ncbi.nlm.nih.gov/18321539) | The study provides quantitative compartmental pharmacokinetic parameters (CL, V, half-life) for orphenadrine in camels, with all numeric values explicitly present in the evidence. |
| `Kornhuber_1995.pdf` | Kornhuber J et al., Orphenadrine is an uncompetitive N-meth…, Journal of neural transmiss… (1995) | pd | 4 | [10.1007/BF01281158](https://doi.org/10.1007/BF01281158) | [8788072](https://www.ncbi.nlm.nih.gov/pubmed/8788072) | metadata signals extractable PD data (IC50) |
| `Moody_2018.pdf` | Moody DE et al., Inhibition of In Vitro Metabolism of Op…, Basic & clinical pharmacolo… (2018) | pd | 4 | [10.1111/bcpt.12999](https://doi.org/10.1111/bcpt.12999) | [29504673](https://www.ncbi.nlm.nih.gov/pubmed/29504673) | metadata signals extractable PD data (IC50) |
| `Pubill_1999.pdf` | Pubill D et al., Assessment of the adrenergic effects of…, The Journal of pharmacy and… (1999) | pd | 4 | [10.1211/0022357991772303](https://doi.org/10.1211/0022357991772303) | [10344632](https://www.ncbi.nlm.nih.gov/pubmed/10344632) | metadata signals extractable PD data (IC50) |
| `Robertson_1994.pdf` | Robertson IG et al., Methadone: a potent inhibitor of rat li…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90192-9](https://doi.org/10.1016/0006-2952(94)90192-9) | [8117328](https://www.ncbi.nlm.nih.gov/pubmed/8117328) | metadata signals extractable PD data (IC50) |
| `Sai_2000.pdf` | Sai Y et al., Assessment of specificity of eight chem…, Xenobiotica; the fate of fo… (2000) | pd | 4 | [10.1080/004982500237541](https://doi.org/10.1080/004982500237541) | [10821163](https://www.ncbi.nlm.nih.gov/pubmed/10821163) | metadata signals extractable PD data (IC50) |
| `Syvälahti_1988.pdf` | Syvälahti EK et al., Effects of antiparkinsonian drugs on mu…, Pharmacology & toxicology (1988) | pd | 4 | [10.1111/j.1600-0773.1988.tb01852.x](https://doi.org/10.1111/j.1600-0773.1988.tb01852.x) | [3353357](https://www.ncbi.nlm.nih.gov/pubmed/3353357) | metadata signals extractable PD data (IC50) |
| `Chung_2006.pdf` | Chung HJ et al., Effects of enzyme inducers and inhibito…, The Journal of pharmacy and… (2006) | pgx | 7 | [10.1211/jpp.58.4.0004](https://doi.org/10.1211/jpp.58.4.0004) | [16597362](https://www.ncbi.nlm.nih.gov/pubmed/16597362) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Yanagihara_2001.pdf` | Yanagihara Y et al., Involvement of CYP2B6 in n-demethylatio…, Drug metabolism and disposi… (2001) | pgx | 7 | not captured | [11353758](https://www.ncbi.nlm.nih.gov/pubmed/11353758) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |

<sub>queue written 2026-10-07T02:37:57.382272+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chang_1993 | not_relevant | 0 | 0 | The study focuses on the activation of cyclophosphamide and ifosphamide, and orphenadrine is used only as a tool compound to inhibit CYP2B6, not as the subject of pharmacogenomic investigation. |
| PGx | Choi_2010 | not_relevant | 0 | 0 | The study investigates CYP isoform involvement in the metabolism of mirodenafil and its metabolite SK3541 using orphenadrine merely as a CYP2B inducer agent, rather than examining the pharmacogenomics of orphenadrine itself. |
| PGx | Chung_2006 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of ipriflavone, not orphenadrine. |
| PGx | Ekins_1997 | not_relevant | 0 | 0 | The paper uses orphenadrine as a tool compound (inhibitor) to characterize CYP2B6 activity on a probe drug (7-EFC), rather than studying how genetic variants affect the pharmacokinetics or pharmacodynamics of orphenadrine itself. |
| PGx | Guo_1997 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition by orphenadrine and does not investigate any genetic variants or pharmacogenomic effects on PK/PD. |
| PGx | Hamaoka_2001 | not_relevant | 0 | 0 | The paper studies midazolam metabolism, not orphenadrine, and reports no pharmacogenomic effects on orphenadrine PK/PD parameters. |
| PGx | Heyn_1996 | not_relevant | 0 | 0 | The paper focuses on the metabolism of S-mephenytoin by CYP2B6, using orphenadrine only as a chemical inhibitor to identify the enzyme, rather than reporting a pharmacogenomic effect of a variant on orphenadrine's PK/PD parameters. |
| PGx | Hijazi_2002 | not_relevant | 0 | 0 | The paper investigates the metabolism of ketamine, using orphenadrine only as a CYP2B6 inhibitor, not as the primary drug for pharmacogenomic PK/PD analysis. |
| PGx | Kobayashi_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of S-mephobarbital, and orphenadrine is only mentioned as an inhibitor of CYP2B6 to characterize the enzyme, not as a drug with a studied pharmacogenomic effect on its own PK/PD. |
| PGx | Li_1997 | not_relevant | 0 | 0 | The paper studies coumarin 7-hydroxylation in liver microsomes; orphenadrine is only mentioned as an unrelated CYP2B6 inhibitor. |
| PGx | Li_2009 | not_relevant | 0 | 0 | The paper characterizes luciferin-isopropyl acetal as a CYP3A4 substrate and mentions orphenadrine only as a non-CYP3A4 inhibitor in a mechanistic assay, with no reporting of pharmacogenomic effects on orphenadrine's PK or PD. |
| PGx | Moody_2018 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition of opioid metabolism by orphenadrine) in vitro, not the effect of a gene variant on orphenadrine's PK or PD. |
| PGx | Oda_2001 | not_relevant | 1 | 0 | The study investigates the metabolism of propofol, not orphenadrine, which is only used as an inhibitor in this context. |
| PGx | Pegolo_2010 | not_relevant | 0 | 0 | The paper studies testosterone hydroxylation in bovine liver using orphenadrine only as a CYP2B inhibitor, rather than investigating pharmacogenomic effects on orphenadrine's own PK/PD parameters. |
| PGx | Ren_1997 | not_relevant | 0 | 0 | The paper investigates the metabolism of cyclophosphamide; orphenadrine is mentioned only as a chemical inhibitor, not as the drug of interest for a pharmacogenomic study. |
| PGx | Royer_1996 | not_relevant | 0 | 0 | The paper discusses docetaxel and paclitaxel metabolism and mentions orphenadrine only as a CYP3A inhibitor in vitro; it does not report how a gene variant alters the PK/PD of orphenadrine itself. |
| PGx | Sai_2000 | not_relevant | 0 | 0 | The paper investigates orphenadrine as a chemical inhibitor of CYP enzymes, not as a drug whose PK/PD is affected by a gene variant. |
| popPK | Scheers_2001 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity test on Hep G2 cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume for orphenadrine. |
| PGx | Skaanild_2002 | not_relevant | 0 | 0 | The paper studies CYP2D activity in pigs and uses orphenadrine as a chemical inhibitor, but it does not investigate human genetic variants affecting orphenadrine's PK or PD. |
| PGx | Stevens_1997 | not_relevant | 0 | 0 | The paper investigates the metabolism of RP 73401 by CYP2B6 and does not report pharmacogenomic effects on orphenadrine. |
| PGx | Svensson_1999 | not_relevant | 0 | 0 | The paper studies the metabolism of artemisinin and uses orphenadrine only as a chemical inhibitor of CYP2B6, rather than reporting a pharmacogenomic effect of a gene variant on orphenadrine's PK/PD. |
| PGx | Wang_1999 | not_relevant | 0 | 0 | The paper focuses on the metabolic pathways of dextromethorphan and only mentions orphenadrine as a standard marker for CYP2B6 activity; it does not report on how genetic variants affect orphenadrine's PK/PD parameters. |
| PGx | Yamazaki_1999 | not_relevant | 0 | 0 | The paper investigates nicotine metabolism; orphenadrine is used only as a probe inhibitor to assess CYP2B6 activity, not as the drug of interest for pharmacogenomic PK/PD parameters. |
| PGx | Yanagihara_2001 | not_relevant | 0 | 0 | The paper focuses on the metabolism of ketamine, not orphenadrine, despite mentioning orphenadrine as an inhibitor. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper is a review focused on tizanidine and does not report pharmacogenomic data for orphenadrine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:37 UTC</sub>
