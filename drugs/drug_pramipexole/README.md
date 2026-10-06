<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;pramipexole&quot;}]"></div>

# pramipexole

- **generic name:** pramipexole
- **ATC codes:** `N04BC05`
- **DrugBank:** [DB00413](https://go.drugbank.com/drugs/DB00413) · **PubChem:** [CID 119570](https://pubchem.ncbi.nlm.nih.gov/compound/119570)
- **molar mass:** 211.327 g/mol (C10H17N3S) — DrugBank
- **groups:** approved, investigational

## About

Pramipexole is a dopamine agonist used to treat Parkinson's disease and restless legs syndrome. It is an approved medicine with several authorised products in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421304](https://www.wikidata.org/wiki/Q421304) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:20 | 0:33 | 0/0/0 | 1/1/0 | 0/0/0 | 34,432/2,229 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2019_CGI_I](drugs/drug_pramipexole/pd_Zhang_2019_CGI_I.md) | Clinical Global Impression Improvement (CGI-I) scale response rate ← pramipexole · direct Emax (saturable) effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2019_IRLS](drugs/drug_pramipexole/pd_Zhang_2019_IRLS.md) | Change in International Restless Leg Syndrome Study Group (IRLS) rating scale score ← pramipexole · direct Emax (saturable) effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Presgraves_2004_protection_against_MPP_induced_neurotoxicity_cell_viability](drugs/drug_pramipexole/pd_Presgraves_2004_protection_against_MPP_induced_neurotoxicity.md) | protection against MPP(+)-induced neurotoxicity (cell viability) ← pramipexole · stimulation effect | — | Presgraves SP et al., Involvement of dopamine D(2)/D(3) recep…, Experimental neurology (2004) | [10.1016/j.expneurol.2004.06.021](https://doi.org/10.1016/j.expneurol.2004.06.021) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pramipexole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | liver | `SLC22A3` unknown | DrugBank actor |
| distribution | placenta | `SLC22A3` unknown | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` unknown | DrugBank actor |
| metabolism | liver | `SLC22A1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (target), DRD2 (target), DRD3 (target), DRD4 (target), HTR1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Soto_2010.pdf` | Soto E et al., Population in vitro-in vivo correlation…, Pharmaceutical research (2010) | popPK | 8 | [10.1007/s11095-009-0027-8](https://doi.org/10.1007/s11095-009-0027-8) | [20039105](https://pubmed.ncbi.nlm.nih.gov/20039105) | Population PK model (two-compartment, first-order absorption) for pramipexole in humans, but numeric parameter values are not shown in the evidence, likely in tables/figures not provided. |
| `Cardon-Dunbar_2017.pdf` | Cardon-Dunbar A et al., Pramipexole Overdose Associated with Vi…, Journal of medical toxicolo… (2017) | popPK | 5 | [10.1007/s13181-017-0615-7](https://doi.org/10.1007/s13181-017-0615-7) | [28547577](https://pubmed.ncbi.nlm.nih.gov/28547577) | Human overdose case with measured pramipexole concentrations and a one-compartment fit reporting an elimination half-life (18 h), but no CL or V values are given. |

<sub>queue written 2026-10-06T14:19:50.153155+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ferger_2010 | irrelevant | 4 | 2 | PK-PD microdialysis study in rats, but no numeric disposition parameters (CL, V, t½) are reported in the evidence; only qualitative exposure profiles. |
| popPK | Fici_1997 | irrelevant | 0 | 0 | In-vitro pharmacology study of D1 receptor activity; pramipexole is only a test agent with no PK parameters. |
| popPK | Presgraves_2004 | irrelevant | 0 | 0 | In-vitro neuroprotection study with no pharmacokinetic disposition parameters for pramipexole. |
| popPK | Singhal_2021 | irrelevant | 3 | 1 | This is a transdermal delivery/iontophoresis study; no numeric PK disposition parameters (CL, V, half-life) for pramipexole appear in the evidence, and any values likely live in figures/supplements not provided. |
| popPK | Soto_2010 | relevant | 8 | 3 | Population PK model (two-compartment, first-order absorption) for pramipexole in humans, but numeric parameter values are not shown in the evidence, likely in tables/figures not provided. |
| popPK | Tadori_2014 | irrelevant | 1 | 1 | A review of therapeutic plasma concentrations vs receptor pharmacology, with no PK disposition parameters (CL, V, ka, half-life, model) for pramipexole. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | This is a pharmacodynamic efficacy meta-analysis of RLS drugs; no PK disposition parameters for pramipexole are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
