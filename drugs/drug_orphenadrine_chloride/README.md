<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04A&quot;,&quot;href&quot;:&quot;atc/N04A.md&quot;},{&quot;label&quot;:&quot;orphenadrine (chloride)&quot;}]"></div>

# orphenadrine (chloride)

- **generic name:** orphenadrine (chloride)
- **ATC codes:** `N04AB02`
- **DrugBank:** [DB01173](https://go.drugbank.com/drugs/DB01173) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Orphenadrine chloride is an anticholinergic drug used to treat Parkinson's disease. It is an approved medicine, though not authorised in the European Union, and has also been investigated for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:23 | 8:10 | 0/0/0 | 0/2/0 | 0/0/0 | 78,896/3,357 | einfracz / qwen3.8-27b | 4 | 2/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.95).">in vitro</span> | [Sadek_2015_acetylcholine_100_M_induced_responses](drugs/drug_orphenadrine_chloride/pd_Sadek_2015_acetylcholine_100_M_induced_responses.md) | acetylcholine (100 µM)-induced responses ← orphenadrine · inhibition effect | — | Sadek B et al., Effects of antihistamines on the functi…, European journal of pharmac… (2015) | [10.1016/j.ejphar.2014.10.046](https://doi.org/10.1016/j.ejphar.2014.10.046) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other organism</span> | [Scholz_2007_I_Kr](drugs/drug_orphenadrine_chloride/pd_Scholz_2007_I_Kr.md) | HERG current ← orphenadrine · inhibition effect | — | Scholz EP et al., Anticholinergic antiparkinson drug orph…, Naunyn-Schmiedeberg's archi… (2007) | [10.1007/s00210-007-0202-6](https://doi.org/10.1007/s00210-007-0202-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=orphenadrine_chloride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GRIN1 (target), GRIN2D (target), GRIN3A (target), GRIN3B (target), HRH1 (target), SCN10A (inhibitor), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 62 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elghazali_2008.pdf` | Elghazali M et al., Pharmacokinetic, metabolism and withdra…, Research in veterinary scie… (2008) | popPK | 10 | [10.1016/j.rvsc.2008.01.006](https://doi.org/10.1016/j.rvsc.2008.01.006) | [18321539](https://pubmed.ncbi.nlm.nih.gov/18321539) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-lives) for orphenadrine in camels. |
| `Kornhuber_1995.pdf` | Kornhuber J et al., Orphenadrine is an uncompetitive N-meth…, Journal of neural transmiss… (1995) | pd | 4 | [10.1007/BF01281158](https://doi.org/10.1007/BF01281158) | [8788072](https://www.ncbi.nlm.nih.gov/pubmed/8788072) | metadata signals extractable PD data (IC50) |
| `Moody_2018.pdf` | Moody DE et al., Inhibition of In Vitro Metabolism of Op…, Basic & clinical pharmacolo… (2018) | pd | 4 | [10.1111/bcpt.12999](https://doi.org/10.1111/bcpt.12999) | [29504673](https://www.ncbi.nlm.nih.gov/pubmed/29504673) | metadata signals extractable PD data (IC50) |
| `Pubill_1999.pdf` | Pubill D et al., Assessment of the adrenergic effects of…, The Journal of pharmacy and… (1999) | pd | 4 | [10.1211/0022357991772303](https://doi.org/10.1211/0022357991772303) | [10344632](https://www.ncbi.nlm.nih.gov/pubmed/10344632) | metadata signals extractable PD data (IC50) |
| `Robertson_1994.pdf` | Robertson IG et al., Methadone: a potent inhibitor of rat li…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90192-9](https://doi.org/10.1016/0006-2952(94)90192-9) | [8117328](https://www.ncbi.nlm.nih.gov/pubmed/8117328) | metadata signals extractable PD data (IC50) |
| `Sai_2000.pdf` | Sai Y et al., Assessment of specificity of eight chem…, Xenobiotica; the fate of fo… (2000) | pd | 4 | [10.1080/004982500237541](https://doi.org/10.1080/004982500237541) | [10821163](https://www.ncbi.nlm.nih.gov/pubmed/10821163) | metadata signals extractable PD data (IC50) |
| `Syvälahti_1988.pdf` | Syvälahti EK et al., Effects of antiparkinsonian drugs on mu…, Pharmacology & toxicology (1988) | pd | 4 | [10.1111/j.1600-0773.1988.tb01852.x](https://doi.org/10.1111/j.1600-0773.1988.tb01852.x) | [3353357](https://www.ncbi.nlm.nih.gov/pubmed/3353357) | metadata signals extractable PD data (IC50) |
| `Chung_2006.pdf` | Chung HJ et al., Effects of enzyme inducers and inhibito…, The Journal of pharmacy and… (2006) | pgx | 7 | [10.1211/jpp.58.4.0004](https://doi.org/10.1211/jpp.58.4.0004) | [16597362](https://www.ncbi.nlm.nih.gov/pubmed/16597362) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Yanagihara_2001.pdf` | Yanagihara Y et al., Involvement of CYP2B6 in n-demethylatio…, Drug metabolism and disposi… (2001) | pgx | 7 | not captured | [11353758](https://www.ncbi.nlm.nih.gov/pubmed/11353758) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |

<sub>queue written 2026-10-07T07:22:13.788344+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chang_1993 | not_relevant | 1 | 1 | The study focuses on the metabolism of cyclophosphamide and ifosphamide, not orphenadrine; orphenadrine is only used as a tool compound to inhibit CYP2B6. |
| PGx | Choi_2010 | not_relevant | 0 | 0 | The study investigates CYP-mediated metabolism of mirodenafil in rats using orphenadrine as an enzyme inducer, not the effect of orphenadrine's pharmacokinetics or pharmacodynamics on a genetic variant. |
| PGx | Chung_2006 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of ipriflavone in rats and merely mentions orphenadrine as a negative control for CYP2E1 induction; it does not report pharmacogenomic effects on orphenadrine. |
| PGx | Ekins_1997 | not_relevant | 0 | 0 | The paper examines 7-EFC as a CYP2B6 probe and mentions orphenadrine only as a chemical inhibitor of the enzyme, not reporting any pharmacogenomic effect on orphenadrine's PK or PD parameters. |
| PGx | Guo_1997 | not_relevant | 0 | 0 | The paper evaluates orphenadrine as an enzyme inhibitor in vitro, but does not report pharmacogenomic effects of gene variants on orphenadrine's own pharmacokinetic or pharmacodynamic parameters. |
| PGx | Hamaoka_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of midazolam, not orphenadrine chloride, and does not report any pharmacogenomic effects on its PK or PD. |
| PGx | Heyn_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of S-mephenytoin and uses orphenadrine as an inhibitor, but does not report pharmacogenomic effects on orphenadrine itself. |
| PGx | Hijazi_2002 | not_relevant | 0 | 0 | The paper focuses on the metabolism of ketamine, not orphenadrine. |
| PGx | Kobayashi_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of S-mephobarbital and only uses orphenadrine as a CYP2B6 inhibitor to validate the enzyme's role, rather than reporting pharmacogenomic effects on orphenadrine's own PK/PD. |
| PGx | Li_1997 | not_relevant | 0 | 0 | The paper focuses on CYP2A6 activity and coumarin hydroxylation; orphenadrine is mentioned only as a CYP2B6 inhibitor in a negative control assay. |
| PGx | Li_2009 | not_relevant | 0 | 0 | The paper uses orphenadrine as a control inhibitor in an enzyme assay, not as the study drug for pharmacogenomic PK/PD analysis. |
| PGx | Moody_2018 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (CYP inhibition) and contains no pharmacogenomic analysis or genetic variants. |
| PGx | Oda_2001 | not_relevant | 0 | 0 | The paper investigates the metabolism of propofol by CYP2B6, using orphenadrine only as an inhibitor, and does not report pharmacogenomic effects on the PK/PD of orphenadrine. |
| PGx | Pegolo_2010 | not_relevant | 0 | 0 | The paper studies testosterone hydroxylation in bovine liver and uses orphenadrine only as a CYP2B inhibitor, without investigating pharmacogenomic effects on its PK/PD. |
| PGx | Ren_1997 | not_relevant | 0 | 0 | The paper investigates cyclophosphamide metabolism and uses orphenadrine only as a P450 inhibitor probe, rather than studying the pharmacokinetics or pharmacodynamics of orphenadrine itself in relation to gene variants. |
| PGx | Royer_1996 | not_relevant | 0 | 0 | The paper studies docetaxel metabolism and only mentions orphenadrine as a CYP3A inhibitor in a list, not as the drug of interest for pharmacogenomics. |
| PGx | Sai_2000 | not_relevant | 0 | 0 | The paper describes orphenadrine as a chemical inhibitor in an in vitro assay of CYP450 enzymes and does not report on pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of orphenadrine. |
| popPK | Scheers_2001 | irrelevant | 0 | 0 | This is an in vitro cytotoxicity study focused on cell viability and toxicity patterns, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Skaanild_2002 | not_relevant | 0 | 0 | The paper investigates the metabolism of test substrates in pig liver and orphenadrine's inhibitory properties, but does not report the impact of genetic variants on orphenadrine's PK or PD parameters in humans. |
| PGx | Stevens_1997 | not_relevant | 0 | 0 | The paper discusses the metabolism of RP 73401, not orphenadrine_chloride, although orphenadrine is used as an inhibitor in the study. |
| PGx | Svensson_1999 | not_relevant | 0 | 0 | The study focuses on artemisinin metabolism and uses orphenadrine only as a CYP2B6 inhibitor, not as the subject of pharmacogenomic investigation. |
| PGx | Wang_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of dextromethorphan and mentions orphenadrine only as a probe substrate for CYP2B6 activity. |
| PGx | Yamazaki_1999 | not_relevant | 0 | 0 | The paper investigates the metabolic enzymes of nicotine and uses orphenadrine only as an inhibitor probe, rather than studying the pharmacokinetics of orphenadrine itself. |
| PGx | Yanagihara_2001 | not_relevant | 0 | 0 | The paper investigates the metabolism of ketamine; orphenadrine is used only as an inhibitor to identify CYP enzymes, not as the drug being studied for pharmacogenomic effects on its own PK/PD. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper is a review on tizanidine and does not report any pharmacogenomic effects on PK or PD parameters for orphenadrine chloride. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
