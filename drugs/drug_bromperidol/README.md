<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;bromperidol&quot;}]"></div>

# bromperidol

- **generic name:** bromperidol
- **ATC codes:** `N05AD06`
- **DrugBank:** [DB12401](https://go.drugbank.com/drugs/DB12401) · **PubChem:** [CID 2448](https://pubchem.ncbi.nlm.nih.gov/compound/2448)
- **molar mass:** 420.322 g/mol (C21H23BrFNO2) — DrugBank
- **groups:** approved, withdrawn

## About

Bromperidol is a butyrophenone antipsychotic used to treat psychotic disorders such as schizophrenia. It was approved at one time but has been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4973749](https://www.wikidata.org/wiki/Q4973749) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:23 | 4:13 | 0/0/0 | 0/1/0 | 0/0/0 | 79,207/2,646 | ollama / glm-5.3-flash | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [de_2018_cAMP](drugs/drug_bromperidol/pd_de_2018_cAMP.md) | cAMP concentration (cellular second messenger response to D2 receptor antagonism) biomarker turnover ← bromperidol (with competitive dopamine at the D2 receptor) | — | de Witte WEA et al., In vitro and in silico analysis of the…, British journal of pharmaco… (2018) | [10.1111/bph.14456](https://doi.org/10.1111/bph.14456) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Suzuki_1998.pdf` | Suzuki A et al., Effects of various factors including th…, Psychopharmacology (1998) | pgx | 8 | [10.1007/s002130050519](https://doi.org/10.1007/s002130050519) | [9539256](https://www.ncbi.nlm.nih.gov/pubmed/9539256) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Furukori_1998.pdf` | Furukori H, [Involvement of cytochromeP4503A4 in th…, Nihon shinkei seishin yakur… (1998) | pgx | 7 | not captured | [9592806](https://www.ncbi.nlm.nih.gov/pubmed/9592806) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Furukori_1999.pdf` | Furukori H et al., Effects of itraconazole on the steady-s…, Psychopharmacology (1999) | pgx | 7 | [10.1007/s002130051048](https://doi.org/10.1007/s002130051048) | [10463320](https://www.ncbi.nlm.nih.gov/pubmed/10463320) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Suzuki_1996.pdf` | Suzuki A et al., No interaction between desipramine and…, Progress in neuro-psychopha… (1996) | pgx | 7 | [10.1016/s0278-5846(96)00111-x](https://doi.org/10.1016/s0278-5846(96)00111-x) | [8938825](https://www.ncbi.nlm.nih.gov/pubmed/8938825) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Tateishi_2000.pdf` | Tateishi T et al., CYP3A is responsible for N-dealkylation…, Life sciences (2000) | pgx | 7 | [10.1016/s0024-3205(00)00874-2](https://doi.org/10.1016/s0024-3205(00)00874-2) | [11133003](https://www.ncbi.nlm.nih.gov/pubmed/11133003) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-06T15:22:22.249513+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Furukori_1998 | not_relevant | 3 | 3 | Drug-drug interaction (itraconazole/CYP3A4 inhibition), not a gene variant/genotype/phenotype effect on PK/PD. |
| PGx | Furukori_1999 | not_relevant | 2 | 5 | Drug-drug interaction (itraconazole/CYP3A4 inhibition), not a gene variant/genotype effect on bromperidol PK/PD. |
| popPK | Kim_2015 | irrelevant | 0 | 0 | This is a population PK study of paroxetine; bromperidol is only used as an internal standard in the LC-MS assay, with no PK parameters for bromperidol. |
| PGx | Lee_2006 | not_relevant | 3 | 2 | Study investigated genetic effects on bromperidol PK/EPS but found no significant correlations; no pharmacogenomic effect reported. |
| PGx | Sato_2000 | not_relevant | 3 | 5 | In vitro enzyme phenotyping of CYP3A4 metabolism, no gene variant/genotype effect on PK/PD parameters in patients. |
| PGx | Suzuki_1996 | not_relevant | 2 | 5 | This is a drug-drug interaction study (desipramine coadministration), not a pharmacogenomic effect of a gene variant/genotype/phenotype on bromperidol PK/PD. |
| PGx | Tateishi_2000 | not_relevant | 3 | 5 | In vitro microsome study identifying CYP3A4 as responsible enzyme; no gene variant/genotype effect on in vivo PK/PD parameters reported. |
| popPK | de_2018 | irrelevant | 0 | 0 | In vitro D2 receptor binding/signalling kinetics study; no pharmacokinetic disposition parameters (CL, V, half-life, PK model) for bromperidol, and any binding values are in figures/tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
