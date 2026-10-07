<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;ritodrine&quot;}]"></div>

# ritodrine

- **generic name:** ritodrine
- **ATC codes:** `G02CA01`
- **DrugBank:** [DB00867](https://go.drugbank.com/drugs/DB00867) · **PubChem:** [CID 33572](https://pubchem.ncbi.nlm.nih.gov/compound/33572)
- **molar mass:** 287.359 g/mol (C17H21NO3) — DrugBank
- **groups:** approved, withdrawn

## About

Ritodrine is a beta-2 adrenergic agonist that was used as a tocolytic to suppress premature labour. It has been withdrawn from the market in some countries, though it may remain available elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5577596](https://www.wikidata.org/wiki/Q5577596) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:29 | 2:26 | 0/0/0 | 0/0/0 | 0/0/7 | 51,273/2,002 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GRK5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Chung_2020](drugs/drug_ritodrine/pgx_Chung_2020_GRK5_Q100.md) | Chung JE et al., Influence of GRK5 gene polymorphisms on…, Scientific reports (2020) | [10.1038/s41598-020-58348-1](https://doi.org/10.1038/s41598-020-58348-1) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ADCY9** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Lee_2021](drugs/drug_ritodrine/pgx_Lee_2021_ADCY9_Q100.md) | Lee N et al., Association between ADCY9 Gene Polymorp…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101653](https://doi.org/10.3390/pharmaceutics13101653) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Lee_2021](drugs/drug_ritodrine/pgx_Lee_2021_ADRB2_Q100.md) | Lee N et al., Association between ADCY9 Gene Polymorp…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101653](https://doi.org/10.3390/pharmaceutics13101653) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PDE4B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Lee_2021](drugs/drug_ritodrine/pgx_Lee_2021_PDE4B_Q100.md) | Lee N et al., Association between ADCY9 Gene Polymorp…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101653](https://doi.org/10.3390/pharmaceutics13101653) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP1A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Seo_2018](drugs/drug_ritodrine/pgx_Seo_2018_CYP1A1_Q100.md) | Seo H et al., Deleterious genetic variants in ciliopa…, BMC medical genomics (2018) | [10.1186/s12920-018-0323-4](https://doi.org/10.1186/s12920-018-0323-4) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP8B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Seo_2018](drugs/drug_ritodrine/pgx_Seo_2018_CYP8B1_Q100.md) | Seo H et al., Deleterious genetic variants in ciliopa…, BMC medical genomics (2018) | [10.1186/s12920-018-0323-4](https://doi.org/10.1186/s12920-018-0323-4) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SERPINA7** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Seo_2018](drugs/drug_ritodrine/pgx_Seo_2018_SERPINA7_Q100.md) | Seo H et al., Deleterious genetic variants in ciliopa…, BMC medical genomics (2018) | [10.1186/s12920-018-0323-4](https://doi.org/10.1186/s12920-018-0323-4) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ritodrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SULT1A1` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` metabolism | paper PGx gene |
| metabolism | small intestine | `CYP1A1` metabolism, `SULT1A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADCY9 (target), ADRB1 (downregulator), ADRB1 (target), ADRB2 (target), ATP2C1 (inhibitor), CYP8B1 (metabolism), GRK5 (target), KCNJ1 (activator), KCNMA1 (activator), MYLK (inhibitor), PDE4B (target), PGD (inhibitor), SERPINA7 (metabolism), SULT1A3 (substrate), SULT1C4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marzo_2010.pdf` | Marzo A et al., Pharmacokinetics and pharmacodynamics o…, Arzneimittel-Forschung (2010) | popPK | 9 | [10.1055/s-0031-1296320](https://doi.org/10.1055/s-0031-1296320) | [20863008](https://pubmed.ncbi.nlm.nih.gov/20863008) | Study reports quantitative PK parameters (Cmax, AUC, t1/2, Vd/f) for ritodrine, but specific numeric values are not present in the provided abstract text. |
| `Boğa_2015.pdf` | Boğa Pekmezekmek A et al., Evaluating the Teratogenicity of Ritodr…, Drug and chemical toxicology (2015) | pd | 5 | [10.3109/01480545.2014.947423](https://doi.org/10.3109/01480545.2014.947423) | [25156158](https://www.ncbi.nlm.nih.gov/pubmed/25156158) | metadata signals extractable PD data (EC50) |
| `Bianchetti_1990.pdf` | Bianchetti A et al., In vitro inhibition of intestinal motil…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14100.x](https://doi.org/10.1111/j.1476-5381.1990.tb14100.x) | [1976401](https://www.ncbi.nlm.nih.gov/pubmed/1976401) | metadata signals extractable PD data (EC50) |
| `Colbert_1991.pdf` | Colbert WE et al., Beta-adrenoceptor profile of ractopamin…, The Journal of pharmacy and… (1991) | pd | 4 | [10.1111/j.2042-7158.1991.tb03192.x](https://doi.org/10.1111/j.2042-7158.1991.tb03192.x) | [1687583](https://www.ncbi.nlm.nih.gov/pubmed/1687583) | metadata signals extractable PD data (EC50) |
| `Croci_1988.pdf` | Croci T et al., Inhibition of rat colon motility by sti…, Pharmacological research co… (1988) | pd | 4 | [10.1016/s0031-6989(88)80007-9](https://doi.org/10.1016/s0031-6989(88)80007-9) | [2898155](https://www.ncbi.nlm.nih.gov/pubmed/2898155) | metadata signals extractable PD data (EC50) |
| `Dennedy_2001.pdf` | Dennedy MC et al., Beta-3 versus beta-2 adrenergic agonist…, BJOG : an international jou… (2001) | pd | 4 | [10.1111/j.1471-0528.2001.00147.x](https://doi.org/10.1111/j.1471-0528.2001.00147.x) | [11426895](https://www.ncbi.nlm.nih.gov/pubmed/11426895) | metadata signals extractable PD data (EC50) |
| `Doret_2002.pdf` | Doret M et al., In vitro study of tocolytic effect of r…, BJOG : an international jou… (2002) | pd | 4 | [10.1111/j.1471-0528.2002.01518.x](https://doi.org/10.1111/j.1471-0528.2002.01518.x) | [12269693](https://www.ncbi.nlm.nih.gov/pubmed/12269693) | metadata signals extractable PD data (EC50) |
| `Seiler_2008.pdf` | Seiler R et al., Role of selective alpha and beta adrene…, Journal of gastrointestinal… (2008) | pd | 4 | [10.1007/s11605-007-0327-4](https://doi.org/10.1007/s11605-007-0327-4) | [17879122](https://www.ncbi.nlm.nih.gov/pubmed/17879122) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T08:28:27.649101+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bianchetti_1990 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Boğa_2015 | irrelevant | 0 | 0 | The study is an in vivo teratogenicity assay measuring LC50/EC50 toxicity endpoints, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Colbert_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of ractopamine, with ritodrine used only as a comparator agent; no pharmacokinetic parameters for ritodrine are reported. |
| popPK | Croci_1988 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of colon motility using ritodrine only as a reference/comparator agent, with no pharmacokinetic parameters reported. |
| popPK | Dennedy_2001 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Doret_2002 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| popPK | Doret_2003 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of myometrial contractility, not a pharmacokinetic study reporting disposition parameters for ritodrine. |
| popPK | Inoue_2009 | irrelevant | 0 | 0 | The study is a pharmacodynamic/in vitro selectivity assessment of bedoradrine, not a pharmacokinetic study of ritodrine. |
| popPK | Marzo_2010 | relevant | 9 | 3 | Study reports quantitative PK parameters (Cmax, AUC, t1/2, Vd/f) for ritodrine, but specific numeric values are not present in the provided abstract text. |
| popPK | Seiler_2008 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study examining adrenergic receptor mechanisms on rat intestinal muscle, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Seo_2018 | not_relevant | 5 | 5 | The paper reports an association between specific genotypes (CYP1A1, SERPINA7) and the occurrence of side effects (adverse reactions), but it does not report a change in a specific quantitative pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameter. |
| popPK | Tanaka_2001 | irrelevant | 0 | 0 | The paper is a pharmacology/structure-activity relationship (SAR) study of new compounds and does not report pharmacokinetic parameters for ritodrine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
