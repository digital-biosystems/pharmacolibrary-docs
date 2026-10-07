<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;trimetrexate&quot;}]"></div>

# trimetrexate

- **generic name:** trimetrexate
- **ATC codes:** `P01AX07`
- **DrugBank:** [DB01157](https://go.drugbank.com/drugs/DB01157) · **PubChem:** [CID 5583](https://pubchem.ncbi.nlm.nih.gov/compound/5583)
- **molar mass:** 369.4176 g/mol (C19H23N5O3) — DrugBank
- **groups:** approved

## About

Trimetrexate is an antifolate drug used to treat pneumocystosis, a protozoal/fungal lung infection. It is an approved antiprotozoal agent, but it does not appear to be widely marketed and its use is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q126677485](https://www.wikidata.org/wiki/Q126677485) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trimetrexate | parent | 369.418 | C19H23N5O3 | DrugBank | [5583](https://pubchem.ncbi.nlm.nih.gov/compound/5583) | Grochow_1989, Grochow_1989_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:26 | 1:26 | 0/1/1 | 1/1/0 | 0/0/0 | 26,156/2,494 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Grochow_1989_reference](drugs/drug_trimetrexate/Trimetrexate_Grochow1989_reference.md) | — | 1-compartment (no model) | 2 | Grochow LB et al., Phase I trial of trimetrexate glucurona…, Journal of the National Can… (1989) | [10.1093/jnci/81.2.124](https://doi.org/10.1093/jnci/81.2.124) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Grochow_1989_2_reference](drugs/drug_trimetrexate/Trimetrexate_Grochow1989v2_reference.md) | — | 1-compartment (no model) | 2 | Grochow LB et al., A phase I trial of trimetrexate glucuro…, Cancer chemotherapy and pha… (1989) | [10.1007/BF00304765](https://doi.org/10.1007/BF00304765) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lee_2010_1_Emax](drugs/drug_trimetrexate/pd_Lee_2010_1_Emax.md) | fractional inhibition of cell growth (1 - fraction affected) ← trimetrexate · direct Emax (saturable) effect | — | Lee JJ et al., Emax model and interaction index for as…, Frontiers in bioscience (El… (2010) | [10.2741/e116](https://doi.org/10.2741/e116) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [White_2003_cancer_cell_growth_inhibition](drugs/drug_trimetrexate/pd_White_2003_cancer_cell_growth_inhibition.md) | cancer cell growth inhibition ← Trimetrexate (TMQ) in three-drug mixture with LY309887 and Tomudex · direct sigmoid Emax (Hill) effect | — | White DB et al., A new nonlinear mixture response surfac…, Current drug metabolism (2003) | [10.2174/1389200033489316](https://doi.org/10.2174/1389200033489316) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trimetrexate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DHFR (inhibitor), PDF (inhibitor), SLC19A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grochow_1989.pdf` | Grochow LB et al., Phase I trial of trimetrexate glucurona…, Journal of the National Can… (1989) | popPK | 10 | [10.1093/jnci/81.2.124](https://doi.org/10.1093/jnci/81.2.124) | [2909752](https://pubmed.ncbi.nlm.nih.gov/2909752) | Human phase I PK study reporting numeric CL (31 mL/min/m2) and Vd (13 L/m2) for trimetrexate directly in the abstract. |
| `Grochow_1989_2.pdf` | Grochow LB et al., A phase I trial of trimetrexate glucuro…, Cancer chemotherapy and pha… (1989) | popPK | 10 | [10.1007/BF00304765](https://doi.org/10.1007/BF00304765) | [2758561](https://pubmed.ncbi.nlm.nih.gov/2758561) | Human phase I PK study reporting clearance (36.5 ± 21 ml/min/m2), Vss, and half-life from compartmental models directly in the abstract. |
| `Lee_2010.pdf` | Lee JJ et al., Emax model and interaction index for as…, Frontiers in bioscience (El… (2010) | pd | 4 | [10.2741/e116](https://doi.org/10.2741/e116) | [20036904](https://www.ncbi.nlm.nih.gov/pubmed/20036904) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T05:26:13.720571+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hattinger_2017 | not_relevant | 3 | 1 | Abstract of a review on antifolate pharmacogenomics in osteosarcoma; no specific trimetrexate PK/PD parameter-genotype effects reported. |
| popPK | Hooijberg_2003 | irrelevant | 0 | 0 | In-vitro cell study of folate transporters; trimetrexate is only a DHFR inhibitor tool, no PK parameters reported. |
| popPK | Lee_2010 | irrelevant | 0 | 0 | In-vitro drug-interaction (synergy) study with no pharmacokinetic disposition parameters for trimetrexate. |
| PGx | Takemura_1996 | not_relevant | 2 | 3 | The paper studies ZD1694 (raltitrexed) activity/metabolism in resistant sublines; trimetrexate is only mentioned as a selection agent, with no gene-variant effect on TMQ PK/PD parameters reported. |
| PGx | Takemura_2001 | not_relevant | 2 | 2 | Abstract discusses general antifolate resistance mechanisms in cell lines, not a gene variant effect on trimetrexate PK/PD parameters. |
| popPK | White_2003 | irrelevant | 0 | 0 | In vitro drug-interaction (synergism) modeling of cell growth inhibition; no pharmacokinetic disposition parameters for trimetrexate are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:26 UTC</sub>
