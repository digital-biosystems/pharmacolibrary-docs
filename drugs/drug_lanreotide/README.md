<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;lanreotide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lanreotide_BuilBruna2016v2_reference&quot;,&quot;label&quot;:&quot;Buil-Bruna_2016_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lanreotide/Lanreotide_BuilBruna2016v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lanreotide

- **generic name:** lanreotide
- **ATC codes:** `H01CB03`
- **DrugBank:** [DB06791](https://go.drugbank.com/drugs/DB06791) · **PubChem:** [CID 71349](https://pubchem.ncbi.nlm.nih.gov/compound/71349)
- **molar mass:** 1096.33 g/mol (C54H69N11O10S2) — DrugBank
- **groups:** approved, investigational

## About

Lanreotide is a synthetic somatostatin analogue used as a hormonal and antineoplastic drug. It is an approved medicine, also under investigation for additional uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1707877](https://www.wikidata.org/wiki/Q1707877) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lanreotide | parent | 1096.33 | C54H69N11O10S2 | DrugBank | [71349](https://pubchem.ncbi.nlm.nih.gov/compound/71349) | Buil-Bruna_2016_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:24 | 3:34 | 1/1/0 | 2/0/0 | 0/0/0 | 177,083/13,036 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Buil-Bruna_2016_2_reference](drugs/drug_lanreotide/Lanreotide_BuilBruna2016v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Buil-Bruna N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2016) | [10.1007/s40262-015-0329-4](https://doi.org/10.1007/s40262-015-0329-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Trocóniz_2009_reference](drugs/drug_lanreotide/Lanreotide_Trocniz2009_reference.md) | — | 1-compartment (no model) | 0 | Trocóniz IF et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2009) | [10.2165/0003088-200948010-00004](https://doi.org/10.2165/0003088-200948010-00004) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Cendros_2005_GH](drugs/drug_lanreotide/pd_Cendros_2005_GH.md) | serum growth hormone (GH) concentrations ← lanreotide · direct Emax (saturable) effect | model (no simulator) | Cendros JM et al., Pharmacokinetics and population pharmac…, Metabolism: clinical and ex… (2005) | [10.1016/j.metabol.2005.04.014](https://doi.org/10.1016/j.metabol.2005.04.014) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Kidd_2009_5HT_secretion](drugs/drug_lanreotide/pd_Kidd_2009_5HT_secretion.md) | serotonin secretion ← lanreotide · direct sigmoid Emax (Hill) effect | — | Kidd M et al., IL1beta- and LPS-induced serotonin secr…, Neurogastroenterology and m… (2009) | [10.1111/j.1365-2982.2008.01210.x](https://doi.org/10.1111/j.1365-2982.2008.01210.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lanreotide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SSTR2 (target), SSTR5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Buil-Bruna_2016_2.pdf` | Buil-Bruna N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2016) | popPK | 10 | [10.1007/s40262-015-0329-4](https://doi.org/10.1007/s40262-015-0329-4) | [26416534](https://pubmed.ncbi.nlm.nih.gov/26416534) | The paper reports quantitative population PK parameters (Vd 18.3 L, CL 513 L/day, IPV) for lanreotide in the abstract text. |
| `Trocóniz_2009.pdf` | Trocóniz IF et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2009) | popPK | 10 | [10.2165/0003088-200948010-00004](https://doi.org/10.2165/0003088-200948010-00004) | [19071884](https://pubmed.ncbi.nlm.nih.gov/19071884) | The study reports quantitative population PK parameters (V=15.1 L, CL=23.1 L/h) for lanreotide, though specific absorption rate values (ka) may be in figures. |
| `Molina-Trinidad_2010.pdf` | Molina-Trinidad EM et al., Therapeutic 188Re-lanreotide: determina…, The Journal of pharmacy and… (2010) | popPK | 7 | [10.1211/jpp.62.04.0007](https://doi.org/10.1211/jpp.62.04.0007) | [20604834](https://pubmed.ncbi.nlm.nih.gov/20604834) | The study reports quantitative two-compartment pharmacokinetic parameters (half-life, k10, k12, Vd, MRT, Vss) for lanreotide in rats with values explicitly listed in the abstract. |

<sub>queue written 2026-10-07T09:22:01.036234+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buil-Bruna_2016 | irrelevant | 3 | 1 | The study uses a pre-established population PK model from reference 23 to derive PK parameters for a PK/PD analysis, and the specific quantitative values (CL, V) are in Supplementary Table S1 which is not provided. |
| popPK | Cendros_2005 | irrelevant | 4 | 2 | The study reports pharmacokinetic metrics (Cmin) and population pharmacodynamic parameters (EC50, Emax) for lanreotide, but does not provide explicit numeric values for standard PK disposition parameters (CL, V, half-life) or a compartmental population PK model. |
| popPK | Farías_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of somatropin (human growth hormone), and lanreotide is used only as a co-administered agent to suppress endogenous GH secretion, not as the subject drug. |
| popPK | Garrido_2012 | irrelevant | 1 | 0 | The study is exclusively pharmacodynamic (modeling GH/IGF-1 effects vs. drug concentration) and does not report pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Jaquet_2005 | irrelevant | 0 | 0 | The study is an in vitro efficacy trial on pituitary adenoma cells focusing on GH/PRL suppression, not a pharmacokinetic study of lanreotide. |
| popPK | Jaquet_2005_2 | irrelevant | 0 | 0 | The study is an in vitro cell culture assay measuring GH/PRL suppression, not a pharmacokinetic study, and lanreotide is only mentioned as background treatment. |
| popPK | Joly_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial focusing on GFR and kidney outcomes, not a pharmacokinetic study, and contains no quantitative PK parameters (CL, V, ka, etc.) for lanreotide. |
| popPK | Kidd_2007 | irrelevant | 0 | 0 | The paper describes in vitro mechanistic studies of lanreotide on cell lines (secretion and proliferation inhibition) and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Kidd_2009 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of serotonin secretion where lanreotide is used only as a tool compound to test inhibitory effects (IC50), not as a subject of pharmacokinetic characterization. |
| popPK | Saveanu_2001 | irrelevant | 0 | 0 | The study focuses on receptor expression and in-vitro suppression of growth hormone release in tumor cells, containing no pharmacokinetic parameters for lanreotide. |
| popPK | Shimon_1997 | irrelevant | 0 | 0 | This is an in vitro receptor binding and functional study measuring IC50 and EC50 values, not a pharmacokinetic study with disposition parameters (CL, V, Ka). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:22 UTC</sub>
