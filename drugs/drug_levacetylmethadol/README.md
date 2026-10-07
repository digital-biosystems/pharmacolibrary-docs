<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levacetylmethadol&quot;}]"></div>

# levacetylmethadol

- **generic name:** levacetylmethadol
- **ATC codes:** `N07BC03`
- **DrugBank:** [DB01227](https://go.drugbank.com/drugs/DB01227) · **PubChem:** [CID 15130](https://pubchem.ncbi.nlm.nih.gov/compound/15130)
- **molar mass:** 353.4977 g/mol (C23H31NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Levacetylmethadol is a synthetic opioid that was used to treat opioid dependence. It has been withdrawn, including from the European Union market, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411799](https://www.wikidata.org/wiki/Q411799) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levacetylmethadol | parent | 353.498 | C23H31NO2 | DrugBank | [15130](https://pubchem.ncbi.nlm.nih.gov/compound/15130) | Finkle_1982 |
| dinor-LAAM | metabolite | 325.452 | C21H27NO2 | PubChem | [170384](https://pubchem.ncbi.nlm.nih.gov/compound/170384) | Finkle_1982 |
| nor-LAAM | metabolite | 339.479 | C22H29NO2 | PubChem | [135260](https://pubchem.ncbi.nlm.nih.gov/compound/135260) | Finkle_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:30 | 2:15 | 0/1/0 | 0/1/0 | 0/0/0 | 19,877/1,835 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Finkle_1982_reference](drugs/drug_levacetylmethadol/Levacetylmethadol_Finkle1982_reference.md) | — | general linear (no model) | 3 | Finkle BS et al., Plasma and urine disposition of 1-alpha…, Journal of analytical toxic… (1982) | [10.1093/jat/6.2.100](https://doi.org/10.1093/jat/6.2.100) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xiao_2001_86Rb_efflux](drugs/drug_levacetylmethadol/pd_Xiao_2001_86Rb_efflux.md) | nicotine-stimulated 86Rb+ efflux ← (-)-alpha-acetylmethadol hydrochloride (LAAM) · direct sigmoid Emax (Hill) effect | — | Xiao Y et al., Blockade of rat alpha3beta4 nicotinic r…, The Journal of pharmacology… (2001) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levacetylmethadol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA3 (target), CHRNB4 (other/unknown), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Finkle_1982.pdf` | Finkle BS et al., Plasma and urine disposition of 1-alpha…, Journal of analytical toxic… (1982) | popPK | 8 | [10.1093/jat/6.2.100](https://doi.org/10.1093/jat/6.2.100) | [7098447](https://pubmed.ncbi.nlm.nih.gov/7098447) | Human disposition study of LAAM with numeric half-lives for parent and metabolites, though no CL/V values are given. |
| `Crettol_2007.pdf` | Crettol S et al., In vitro P-glycoprotein-mediated transp…, Pharmacology (2007) | pgx | 7 | [10.1159/000107104](https://doi.org/10.1159/000107104) | [17690563](https://www.ncbi.nlm.nih.gov/pubmed/17690563) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Oda_2001.pdf` | Oda Y et al., Metabolism of methadone and levo-alpha-…, The Journal of pharmacology… (2001) | pgx | 7 | not captured | [11504799](https://www.ncbi.nlm.nih.gov/pubmed/11504799) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T03:29:50.400984+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baker_2006 | not_relevant | 0 | 0 | Study examines buprenorphine/naloxone and ARV effects on QT interval; no pharmacogenomic variant/genotype effect on levacetylmethadol PK/PD is reported. |
| PGx | Cottrill_2021 | not_relevant | 3 | 2 | Levacetylmethadol is only listed as metabolized by CYP3A4/3A5; no genotype-specific PK/PD parameter values or effect sizes are reported. |
| PGx | Crettol_2007 | not_relevant | 4 | 3 | In vitro P-gp substrate study without a gene variant/genotype comparison or measured PK/PD parameter change in patients. |
| PGx | Oda_2001 | not_relevant | 3 | 5 | In vitro enzyme kinetics of CYP3A4/2B6 metabolism of LAAM; no gene variant/genotype/phenotype effect on in vivo PK/PD parameters reported. |
| PGx | Oda_2001_2 | not_relevant | 0 | 0 | In vitro enzyme kinetics of CYP3A4 metabolism; no gene variant/genotype/phenotype effect on PK/PD parameters reported. |
| popPK | Xiao_2001 | irrelevant | 0 | 0 | In-vitro mechanistic study of nicotinic receptor blockade by methadone/LAAM; no PK disposition parameters for levacetylmethadol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:29 UTC</sub>
