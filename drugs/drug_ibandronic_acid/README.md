<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;ibandronic acid&quot;}]"></div>

# ibandronic acid

- **generic name:** ibandronic acid
- **ATC codes:** `M05BA06`, `M05BB09`
- **DrugBank:** [DB00710](https://go.drugbank.com/drugs/DB00710) · **PubChem:** [CID 60852](https://pubchem.ncbi.nlm.nih.gov/compound/60852)
- **molar mass:** 319.2289 g/mol (C9H23NO7P2) — DrugBank
- **groups:** approved, investigational

## About

Ibandronic acid is a bisphosphonate used to treat postmenopausal osteoporosis and other bone diseases, and to prevent bone complications from breast cancer. It is an approved medicine with several products still authorised in the European Union, though some EU marketing authorisations have lapsed or been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q166825](https://www.wikidata.org/wiki/Q166825) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:40 | 1:13 | 0/0/0 | 0/0/0 | 0/0/1 | 25,553/933 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **VDR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Mondockova_2023](drugs/drug_ibandronic_acid/pgx_Mondockova_2023_VDR_Q100.md) | Mondockova V et al., Vitamin D Receptor Gene Polymorphisms A…, Genes (2023) | [10.3390/genes14010193](https://doi.org/10.3390/genes14010193) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ibandronic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FDPS (inhibitor), GGPS1 (inhibitor), Hydroxylapatite (target), VDR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pillai_2006.pdf` | Pillai G et al., Population pharmacokinetics of ibandron…, International journal of cl… (2006) | popPK | 10 | [10.5414/cpp44655](https://doi.org/10.5414/cpp44655) | [17190376](https://pubmed.ncbi.nlm.nih.gov/17190376) | The paper describes a population PK model for ibandronate with numeric parameters mentioned (e.g., CLCR influence) but specific parameter values (CL, V, Q) are not fully provided in the text, likely residing in tables or figures not fully extracted. |
| `Jordan_2005.pdf` | Jordan P et al., Explicit solutions for a class of indir…, Computer methods and progra… (2005) | pd | 5 | [10.1016/j.cmpb.2004.02.002](https://doi.org/10.1016/j.cmpb.2004.02.002) | [15652631](https://www.ncbi.nlm.nih.gov/pubmed/15652631) | metadata signals extractable PD data (indirectresponse) |
| `Marathe_2011.pdf` | Marathe DD et al., Integrated model for denosumab and iban…, Biopharmaceutics & drug dis… (2011) | pd | 5 | [10.1002/bdd.770](https://doi.org/10.1002/bdd.770) | [21953540](https://www.ncbi.nlm.nih.gov/pubmed/21953540) | metadata signals extractable PD data (turnovermodel) |
| `Pillai_2004.pdf` | Pillai G et al., A semimechanistic and mechanistic popul…, British journal of clinical… (2004) | pd | 5 | [10.1111/j.1365-2125.2004.02224.x](https://doi.org/10.1111/j.1365-2125.2004.02224.x) | [15563360](https://www.ncbi.nlm.nih.gov/pubmed/15563360) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-10-07T03:40:44.414846+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ayturk_2025 | not_relevant | 4 | 5 | The study investigates the association between VDR/ER1/Col1a1 polymorphisms and bone mineral density response, not the specific pharmacokinetics or pharmacodynamics of ibandronic acid itself. |
| popPK | Jordan_2005 | irrelevant | 0 | 0 | The paper presents mathematical explicit solutions for indirect response models and mentions ibandronate only as a case study for model evaluation speed, without reporting specific quantitative pharmacokinetic parameter values (CL, V, etc.). |
| PGx | Liubimova_2000 | not_relevant | 0 | 0 | The paper discusses bone markers in cancer patients and mentions ibandronate but contains no information on gene variants, genotypes, or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Lühe_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of FPP synthase inhibition and cytotoxicity, not a pharmacokinetic study reporting disposition parameters like CL, V, or ka. |
| popPK | Mandema_2014 | irrelevant | 0 | 0 | The paper is a meta-analysis of bone mineral density outcomes, not a pharmacokinetic study, and provides no disposition parameters for ibandronic acid. |
| popPK | Marathe_2011 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Pillai_2006 | relevant | 10 | 2 | The paper describes a population PK model for ibandronate with numeric parameters mentioned (e.g., CLCR influence) but specific parameter values (CL, V, Q) are not fully provided in the text, likely residing in tables or figures not fully extracted. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The paper is a pharmacodynamic model-based meta-analysis of bone mineral density and bone turnover markers, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for ibandronate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
