<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;parecoxib&quot;}]"></div>

# parecoxib

- **generic name:** parecoxib
- **ATC codes:** `M01AH04`
- **DrugBank:** [DB08439](https://go.drugbank.com/drugs/DB08439) · **PubChem:** [CID 119828](https://pubchem.ncbi.nlm.nih.gov/compound/119828)
- **molar mass:** 370.422 g/mol (C19H18N2O4S) — DrugBank
- **groups:** approved, investigational

## About

Parecoxib is a COX-2 inhibitor used to treat postoperative pain. It is an injectable coxib authorised in the European Union, used mainly for short-term relief of pain after surgery.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q347941](https://www.wikidata.org/wiki/Q347941) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| parecoxib | parent | 370.422 | C19H18N2O4S | DrugBank | [119828](https://pubchem.ncbi.nlm.nih.gov/compound/119828) | Tan_2016 |
| valdecoxib | metabolite | 314.359 | C16H14N2O3S | PubChem | [119607](https://pubchem.ncbi.nlm.nih.gov/compound/119607) | Tan_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:45 | 0:22 | 1/0/0 | 1/0/0 | 0/0/0 | 30,631/3,364 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tan_2016_reference](drugs/drug_parecoxib/Parecoxib_Tan2016_reference.md) | held back | 1-compartment, IV | 8 | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tan_2016_MME](drugs/drug_parecoxib/pd_Tan_2016_MME.md) | rescue morphine equivalents during recovery ← parecoxib · direct Emax (saturable) effect | — | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=parecoxib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: LTF (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hullett_2012.pdf` | Hullett B et al., Development of a population pharmacokin…, Anesthesiology (2012) | popPK | 10 | [10.1097/ALN.0b013e31825154ef](https://doi.org/10.1097/ALN.0b013e31825154ef) | [22450476](https://pubmed.ncbi.nlm.nih.gov/22450476) | The study is a population PK modeling study for parecoxib, but the specific quantitative parameter values (clearance, volume, etc.) are not listed in the provided text, only trends and model structure. |
| `Tan_2016.pdf` | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | popPK | 10 | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) | [27779354](https://pubmed.ncbi.nlm.nih.gov/27779354) | The paper reports quantitative population pharmacokinetic parameter estimates (CL, V, Q) for parecoxib and its metabolite in children, with all numeric values explicitly listed in the text. |

<sub>queue written 2026-10-07T01:45:33.854572+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chaignat_2008 | irrelevant | 0 | 0 | This is a pharmacodynamic study focusing on ureteral contractility, reporting no pharmacokinetic parameters (CL, V, etc.) for parecoxib. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing acupressure and parecoxib for pain relief, reporting no pharmacokinetic parameters. |
| popPK | Hullett_2012 | relevant | 10 | 2 | The study is a population PK modeling study for parecoxib, but the specific quantitative parameter values (clearance, volume, etc.) are not listed in the provided text, only trends and model structure. |
| popPK | Ibrahim_2002 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of propofol (the subject drug), with parecoxib acting as a co-administered probe to check for interactions, and no quantitative disposition parameters for parecoxib itself are reported. |
| popPK | Klein_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study focused on celecoxib's vascular effects, with parecoxib serving only as a negative control for coronary flow, and it reports no pharmacokinetic parameters. |
| popPK | Paech_2012 | irrelevant | 2 | 1 | The study focuses on lactation/milk transfer (M/P, AID, RID) and does not report maternal population pharmacokinetic parameters (CL, V, t1/2) for parecoxib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:45 UTC</sub>
