<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;sulfinpyrazone&quot;}]"></div>

# sulfinpyrazone

- **generic name:** sulfinpyrazone
- **ATC codes:** `M04AB02`
- **DrugBank:** [DB01138](https://go.drugbank.com/drugs/DB01138) · **PubChem:** [CID 5342](https://pubchem.ncbi.nlm.nih.gov/compound/5342)
- **molar mass:** 404.482 g/mol (C23H20N2O3S) — DrugBank
- **groups:** approved

## About

Sulfinpyrazone is a uricosuric drug used to treat gout, and has also been used in heart conditions such as myocardial infarction, angina pectoris, and coronary artery disease. It is an approved medicine, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3790542](https://www.wikidata.org/wiki/Q3790542) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:31 | 4:03 | 0/0/0 | 0/1/0 | 0/0/0 | 43,116/2,332 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Roch-Ramel_1997_Uptake](drugs/drug_sulfinpyrazone/pd_Roch_Ramel_1997_Uptake.md) | [14C]-urate uptake ← sulfinpyrazone · direct sigmoid Emax (Hill) effect | — | Roch-Ramel F et al., Effects of uricosuric and antiuricosuri…, The Journal of pharmacology… (1997) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulfinpyrazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor/substrate, `ABCC4` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inhibitor/substrate, `ABCC3` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (inhibitor), ABCC6 (inhibitor), FABP2 (unknown), NR1I2 (activator), SLC22A12 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faucette_2004.pdf` | Faucette SR et al., Regulation of CYP2B6 in primary human h…, Drug metabolism and disposi… (2004) | pd | 4 | [10.1124/dmd.32.3.348](https://doi.org/10.1124/dmd.32.3.348) | [14977870](https://www.ncbi.nlm.nih.gov/pubmed/14977870) | metadata signals extractable PD data (EC50) |
| `Lyu_1992.pdf` | Lyu RM et al., Ca2+ influx via Na(+)-Ca2+ exchange in…, The American journal of phy… (1992) | pd | 4 | [10.1152/ajpcell.1992.263.3.C628](https://doi.org/10.1152/ajpcell.1992.263.3.C628) | [1415512](https://www.ncbi.nlm.nih.gov/pubmed/1415512) | metadata signals extractable PD data (sigmoid) |
| `Roch-Ramel_1997.pdf` | Roch-Ramel F et al., Effects of uricosuric and antiuricosuri…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9023298](https://www.ncbi.nlm.nih.gov/pubmed/9023298) | metadata signals extractable PD data (IC50) |
| `Korprasertthaworn_2012.pdf` | Korprasertthaworn P et al., Effects of amino acid substitutions at…, Biochemical pharmacology (2012) | pgx | 8 | [10.1016/j.bcp.2012.08.026](https://doi.org/10.1016/j.bcp.2012.08.026) | [22981363](https://www.ncbi.nlm.nih.gov/pubmed/22981363) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |
| `Kosugi_2012.pdf` | Kosugi Y et al., Evaluation of cytochrome P450-mediated…, Xenobiotica; the fate of fo… (2012) | pgx | 7 | [10.3109/00498254.2011.626087](https://doi.org/10.3109/00498254.2011.626087) | [22117526](https://www.ncbi.nlm.nih.gov/pubmed/22117526) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sabia_2004.pdf` | Sabia H et al., Effect of a selective CYP2C9 inhibitor…, European journal of clinica… (2004) | pgx | 7 | [10.1007/s00228-004-0778-4](https://doi.org/10.1007/s00228-004-0778-4) | [15197517](https://www.ncbi.nlm.nih.gov/pubmed/15197517) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Uchaipichat_2006.pdf` | Uchaipichat V et al., Selectivity of substrate (trifluoperazi…, Drug metabolism and disposi… (2006) | pgx | 7 | [10.1124/dmd.105.007369](https://doi.org/10.1124/dmd.105.007369) | [16381668](https://www.ncbi.nlm.nih.gov/pubmed/16381668) | metadata signals extractable PGX data (UGT1A4, PK/PD-context) |
| `Miners_1998.pdf` | Miners JO et al., Cytochrome P4502C9: an enzyme of major…, British journal of clinical… (1998) | pgx | 5 | [10.1046/j.1365-2125.1998.00721.x](https://doi.org/10.1046/j.1365-2125.1998.00721.x) | [9663807](https://www.ncbi.nlm.nih.gov/pubmed/9663807) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-07T03:31:31.507770+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bessho_2009 | not_relevant | 0 | 0 | The study investigates vinorelbine resistance in cancer cell lines using sulfinpyrazone as a transporter inhibitor, but does not report pharmacogenomic effects of gene variants on sulfinpyrazone PK or PD parameters. |
| popPK | Best_2005 | irrelevant | 0 | 0 | The study focuses on ascorbate transport kinetics in pig cells where sulfinpyrazone is used only as an inhibitor, not as the subject of pharmacokinetic analysis. |
| PGx | Diah_2001 | not_relevant | 0 | 0 | The paper studies the effect of sulfinpyrazone on mitoxantrone transport in breast cancer cells and does not report pharmacogenomic effects on sulfinpyrazone's own PK or PD parameters. |
| PGx | Enoru-Eta_2010 | not_relevant | 0 | 0 | The paper describes the development of a reporter gene assay for UGT1A1 induction using sulfinpyrazone as a ligand, but does not report pharmacogenomic effects of gene variants on sulfinpyrazone PK/PD. |
| popPK | Faucette_2004 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CYP2B6 induction where sulfinpyrazone is used as a probe inducer, not a PK study of sulfinpyrazone disposition. |
| PGx | Faucette_2004 | not_relevant | 0 | 0 | The study investigates the in vitro induction of CYP2B6 by sulfinpyrazone as a chemical inducer, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of sulfinpyrazone. |
| PGx | Hassan_2022 | not_relevant | 0 | 0 | The paper is a computational drug repositioning study using docking and molecular dynamics; it does not report clinical or experimental pharmacogenomic effects on PK or PD parameters. |
| popPK | Holmes_2000 | irrelevant | 0 | 0 | Sulfinpyrazone is used as a tool compound/inhibitor to study ascorbate transport, not as the subject drug for PK analysis. |
| popPK | Kerdpin_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzymatic metabolism (UGT1A9) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Kerdpin_2008 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of frusemide and uses sulfinpyrazone only as a UGT1A selective inhibitor, rather than reporting a pharmacogenomic effect on sulfinpyrazone's own parameters. |
| PGx | Korprasertthaworn_2012 | not_relevant | 2 | 8 | The paper reports in vitro kinetic parameters (Km, Vmax, Clint) of UGT1A9 variants using sulfinpyrazone as a substrate, but does not report in vivo pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Kosugi_2012 | not_relevant | 0 | 0 | The paper evaluates regulatory guidelines for drug-drug interactions and mentions sulfinpyrazone only as an example in comparing EMEA and FDA assessment outcomes, without reporting pharmacogenomic effects on its PK or PD parameters. |
| PGx | Luo_2002 | not_relevant | 0 | 0 | The paper evaluates CYP3A4 induction potential of drugs (including sulfinpyrazone) but does not report a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter of sulfinpyrazone. |
| popPK | Lyu_1992 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study of Na+-Ca2+ exchange where sulfinpyrazone is used solely as a tool compound (anion transport inhibitor) to manipulate intracellular conditions, not as a subject of pharmacokinetic analysis. |
| popPK | McClenaghan_2012 | irrelevant | 0 | 0 | The study is an in-vitro investigation of TRPA1 channel activity and assay protocols, reporting no pharmacokinetic parameters for sulfinpyrazone. |
| PGx | Miners_1998 | not_relevant | 0 | 0 | The provided text is only a title describing CYP2C9 importance in drug metabolism and does not contain data on sulfinpyrazone pharmacokinetics or pharmacodynamics. |
| popPK | Nielsen-Kudsk_1980 | irrelevant | 1 | 0 | The study describes an HPLC method applicable to sulfinpyrazone, but the only reported pharmacokinetic parameters are for naproxen, not sulfinpyrazone. |
| PGx | Ogg_1997 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 induction by sulfinpyrazone in a cell line, which is a mechanistic study not reporting in vivo pharmacokinetic or pharmacodynamic changes based on genetic variants or genotypes. |
| PGx | Ogg_1999 | not_relevant | 0 | 0 | The paper is an in vitro reporter gene assay studying CYP3A4 induction mechanisms; sulfinpyrazone is tested as an inducer, not as a drug whose PK/PD is affected by a gene variant. |
| PGx | Oguri_2008 | not_relevant | 0 | 0 | The study focuses on paclitaxel resistance mediated by ABCC10, using sulfinpyrazone only as an inhibitor to validate transporter function, rather than reporting pharmacogenomic effects on sulfinpyrazone's own PK/PD parameters. |
| popPK | Roch-Ramel_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of urate transport inhibition (IC50 values) in membrane vesicles, not a pharmacokinetic study of sulfinpyrazone disposition. |
| PGx | Sabia_2004 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (CYP2C9 inhibition) rather than a pharmacogenomic effect, and sulfinpyrazone is the probe inhibitor, not the drug with the altered PK/PD. |
| PGx | Uchaipichat_2006 | not_relevant | 0 | 0 | The paper reports enzyme selectivity of sulfinpyrazone as a probe/inhibitor for UDP-glucuronosyltransferases, not a pharmacogenomic effect on its PK/PD. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses the interaction of sulfinpyrazone with theophylline (increasing its clearance), but does not report a pharmacogenomic effect on a PK or PD parameter of sulfinpyrazone itself. |
| popPK | Wosilait_1981 | irrelevant | 0 | 0 | This is an in-vitro study focused on warfarin protein binding, where sulfinpyrazone is used only as a competing agent, and no PK parameters for sulfinpyrazone are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
