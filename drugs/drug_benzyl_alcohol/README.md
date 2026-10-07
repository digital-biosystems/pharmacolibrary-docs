<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;benzyl alcohol&quot;}]"></div>

# benzyl alcohol

- **generic name:** benzyl alcohol
- **ATC codes:** `P03AX06`
- **DrugBank:** [DB06770](https://go.drugbank.com/drugs/DB06770) · **PubChem:** [CID 244](https://pubchem.ncbi.nlm.nih.gov/compound/244)
- **molar mass:** 108.1378 g/mol (C7H8O) — DrugBank
- **groups:** approved, investigational

## About

Benzyl alcohol is used as an ectoparasiticide, for example against lice, and also acts as a local anesthetic. It is an approved drug and remains in use, though it is not specifically authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q52353](https://www.wikidata.org/wiki/Q52353) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:07 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 58,481/1,373 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benzyl_alcohol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `ALDH2` substrate, `CYP1A2` substrate, `CYP2C8` substrate, `CYP2D6` substrate, `CYP2E1` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Griffenhagen_2015.pdf` | Griffenhagen GM et al., Pharmacokinetics and pharmacodynamics o…, Veterinary anaesthesia and… (2015) | popPK | 5 | [10.1111/vaa.12233](https://doi.org/10.1111/vaa.12233) | [25327817](https://pubmed.ncbi.nlm.nih.gov/25327817) | Benzyl alcohol was measured and modeled (2-compartment) in cats, but most BA concentrations were below LLOQ and the reported numeric parameter (CLD2) pertains to propofol, not benzyl alcohol. |

<sub>queue written 2026-10-07T10:07:07.437295+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anadón_1991 | irrelevant | 2 | 3 | Benzyl alcohol appears only as a metabolite of permethrin (the subject drug); no PK parameters for benzyl alcohol itself are reported, and metabolite values are not given numerically. |
| popPK | Assafiri_2025 | irrelevant | 0 | 0 | This is an in vitro PK/PD model of ciprofloxacin and phage PEV31 against P. aeruginosa; benzyl_alcohol is not mentioned at all. |
| popPK | Biagioli_2020 | irrelevant | 0 | 0 | Benzyl alcohol appears only as part of the chemical name of the drug REV5901; no PK parameters for benzyl alcohol are reported. |
| popPK | Bérczi_1993 | irrelevant | 0 | 0 | Benzyl alcohol is only a mechanistic perturbant in an in-vitro endocytosis assay; no PK disposition parameters for it are reported. |
| popPK | Du_2021 | irrelevant | 0 | 0 | This is an antifungal drug-discovery study; benzyl alcohol is only a chemical fragment tested for fungicidal activity, with no pharmacokinetic parameters reported. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | In vitro skin sensitization assay; benzyl alcohol is only a test chemical, no PK parameters reported. |
| popPK | Griffenhagen_2015 | relevant | 5 | 3 | Benzyl alcohol was measured and modeled (2-compartment) in cats, but most BA concentrations were below LLOQ and the reported numeric parameter (CLD2) pertains to propofol, not benzyl alcohol. |
| popPK | Kocarek_1989 | irrelevant | 0 | 0 | In-vitro enzyme induction study of fibrates in rat hepatocytes; no benzyl_alcohol PK parameters reported. |
| popPK | Leifert_1999 | irrelevant | 0 | 0 | Benzyl alcohol is only a membrane-fluidising comparator in an electrophysiology study; no PK disposition parameters are reported. |
| popPK | Rooney_1993 | irrelevant | 0 | 0 | Benzyl alcohol is only a comparator agent in an in-vitro membrane fluidity/PLC assay; no PK parameters for it are reported. |
| popPK | Saiyasombati_2003 | irrelevant | 3 | 2 | In-vitro Franz cell skin diffusion/evaporation kinetic modeling of benzyl alcohol, not in-vivo disposition PK parameters; no numeric CL/V/ka values present in the evidence. |
| popPK | Saxena_1989 | irrelevant | 2 | 3 | The study doses benzyl chloride, not benzyl_alcohol; benzyl alcohol appears only as a urinary metabolite, and no PK parameters for benzyl_alcohol itself are reported. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | Benzyl alcohol is only a formulation excipient in a fungicide study; no PK parameters for it are reported. |
| popPK | Winne_1987 | irrelevant | 2 | 2 | Rat intestinal absorption study reporting only relative pre-epithelial diffusion resistance percentages for benzyl alcohol, not disposition PK parameters (CL, V, half-life); no numeric compartmental parameters given. |
| popPK | Yeamsuriyotai_2025 | irrelevant | 0 | 0 | Benzyl alcohol appears only as a GC-MS constituent (20.68%) of jasmine essential oil; no PK parameters for benzyl alcohol are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
