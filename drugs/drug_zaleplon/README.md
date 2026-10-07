<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;zaleplon&quot;}]"></div>

# zaleplon

- **generic name:** zaleplon
- **ATC codes:** `N05CF03`
- **DrugBank:** [DB00962](https://go.drugbank.com/drugs/DB00962) · **PubChem:** [CID 5719](https://pubchem.ncbi.nlm.nih.gov/compound/5719)
- **molar mass:** 305.3339 g/mol (C17H15N5O) — DrugBank
- **groups:** approved, illicit

## About

Zaleplon is a hypnotic and sedative drug used to treat insomnia. It is an approved medicine, though its European Union products have been withdrawn, and it is also used illicitly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q145052](https://www.wikidata.org/wiki/Q145052) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:09 | 2:08 | 0/0/0 | 0/0/0 | 0/0/0 | 20,354/999 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zaleplon) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (potentiator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Drover_2000.pdf` | Drover D et al., Pharmacokinetics, pharmacodynamics, and…, Clinical therapeutics (2000) | popPK | 6 | [10.1016/s0149-2918(00)83043-x](https://doi.org/10.1016/s0149-2918(00)83043-x) | [11192136](https://pubmed.ncbi.nlm.nih.gov/11192136) | Human zaleplon PK study using NONMEM, but only the half-life (60.1±8.9 min) is given; CL/V and population-PK parameter values are not in the evidence. |
| `Beedham_2003.pdf` | Beedham C et al., Ziprasidone metabolism, aldehyde oxidas…, Journal of clinical psychop… (2003) | pgx | 8 | [10.1097/01.jcp.0000084028.22282.f2](https://doi.org/10.1097/01.jcp.0000084028.22282.f2) | [12826984](https://www.ncbi.nlm.nih.gov/pubmed/12826984) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hesse_2003.pdf` | Hesse LM et al., Clinically important drug interactions…, CNS drugs (2003) | pgx | 7 | [10.2165/00023210-200317070-00004](https://doi.org/10.2165/00023210-200317070-00004) | [12751920](https://www.ncbi.nlm.nih.gov/pubmed/12751920) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Najib_2006.pdf` | Najib J, Eszopiclone, a nonbenzodiazepine sedati…, Clinical therapeutics (2006) | pgx | 7 | [10.1016/j.clinthera.2006.04.014](https://doi.org/10.1016/j.clinthera.2006.04.014) | [16750462](https://www.ncbi.nlm.nih.gov/pubmed/16750462) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Renwick_1998.pdf` | Renwick AB et al., Metabolism of Zaleplon by human hepatic…, Xenobiotica; the fate of fo… (1998) | pgx | 7 | [10.1080/004982598239452](https://doi.org/10.1080/004982598239452) | [9604298](https://www.ncbi.nlm.nih.gov/pubmed/9604298) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-06T23:09:22.842132+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Beedham_2003 | not_relevant | 0 | 0 | Paper discusses ziprasidone and aldehyde oxidase; zaleplon only mentioned as AO substrate with no pharmacogenomic effect on its PK/PD parameters. |
| popPK | Drover_2000 | relevant | 6 | 3 | Human zaleplon PK study using NONMEM, but only the half-life (60.1±8.9 min) is given; CL/V and population-PK parameter values are not in the evidence. |
| popPK | Goldschmied_2021 | irrelevant | 0 | 0 | Clinical efficacy/metabolomics study of zaleplon in HIV+ patients with no PK parameters reported. |
| PGx | Hesse_2003 | not_relevant | 2 | 3 | Review of drug-drug interactions (CYP inhibitors/inducers) with zaleplon; no gene variant/genotype effects on PK/PD parameters reported. |
| PGx | Izat_2025 | not_relevant | 0 | 0 | PBPK modeling of AO/CYP3A4-mediated clearance of zaleplon; no gene variant/genotype/phenotype effects on PK/PD reported. |
| PGx | Najib_2006 | not_relevant | 0 | 0 | Review of eszopiclone PK/PD with no pharmacogenomic (gene variant) effects reported for zaleplon. |
| popPK | Petroski_2006 | irrelevant | 0 | 0 | In-vitro electrophysiology study of indiplon; zaleplon is only a potency comparator, no PK parameters. |
| PGx | Renwick_1998 | not_relevant | 2 | 3 | Identifies CYP3A as the enzyme catalyzing zaleplon N-deethylation via correlation/inhibition studies, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Strelevitz_2012 | not_relevant | 0 | 0 | In vitro enzyme inhibition study of aldehyde oxidase using zaleplon as probe; no gene variant/genotype/phenotype effect on PK/PD reported. |
| PGx | Tanoue_2013 | not_relevant | 2 | 3 | Species/chimeric-liver model differences in zaleplon metabolism, not a gene variant/genotype/phenotype effect on PK/PD parameters. |
| popPK | Wegner_2008 | irrelevant | 0 | 0 | In-vitro receptor binding/pharmacology study of indiplon derivatives; zaleplon is only a reference ligand, no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
