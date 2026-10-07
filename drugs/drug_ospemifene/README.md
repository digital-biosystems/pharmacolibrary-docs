<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03X&quot;,&quot;href&quot;:&quot;atc/G03X.md&quot;},{&quot;label&quot;:&quot;ospemifene&quot;}]"></div>

# ospemifene

- **generic name:** ospemifene
- **ATC codes:** `G03XC05`
- **DrugBank:** [DB04938](https://go.drugbank.com/drugs/DB04938) · **PubChem:** [CID 3036505](https://pubchem.ncbi.nlm.nih.gov/compound/3036505)
- **molar mass:** 378.891 g/mol (C24H23ClO2) — DrugBank
- **groups:** approved

## About

Ospemifene is a selective estrogen receptor modulator used to treat dyspareunia (painful intercourse) in postmenopausal women. It is an approved medicine with one product authorised in the European Union, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7107372](https://www.wikidata.org/wiki/Q7107372) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ospemifene | parent | 378.891 | C24H23ClO2 | DrugBank | [3036505](https://pubchem.ncbi.nlm.nih.gov/compound/3036505) | Kubota_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:28 | 0:25 | 1/0/0 | 0/0/0 | 0/0/0 | 14,092/1,008 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kubota_2017_reference](drugs/drug_ospemifene/Ospemifene_Kubota2017_reference.md) | held back | 1-compartment, oral | 5 | Kubota R et al., Population pharmacokinetics of ospemife…, International journal of cl… (2017) | [10.5414/CP202821](https://doi.org/10.5414/CP202821) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ospemifene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kubota_2017.pdf` | Kubota R et al., Population pharmacokinetics of ospemife…, International journal of cl… (2017) | popPK | 10 | [10.5414/CP202821](https://doi.org/10.5414/CP202821) | [28128722](https://pubmed.ncbi.nlm.nih.gov/28128722) | The paper is a population PK study for ospemifene in humans and explicitly provides the final model parameter estimates (CL/F, V2/F, Q/F, V3/F, ka) in the results section. |
| `Lehtinen_2013.pdf` | Lehtinen T et al., Effects of cytochrome P450 inhibitors a…, Biopharmaceutics & drug dis… (2013) | pgx | 7 | [10.1002/bdd.1853](https://doi.org/10.1002/bdd.1853) | [23852652](https://www.ncbi.nlm.nih.gov/pubmed/23852652) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tolonen_2013.pdf` | Tolonen A et al., Ospemifene metabolism in humans in vitr…, Drug metabolism and drug in… (2013) | pgx | 7 | [10.1515/dmdi-2013-0016](https://doi.org/10.1515/dmdi-2013-0016) | [23729558](https://www.ncbi.nlm.nih.gov/pubmed/23729558) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-07T09:28:38.227463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Lehtinen_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with CYP modulators (phenotypic effects), not the impact of specific gene variants or genotypes on ospemifene pharmacokinetics. |
| PGx | Tolonen_2013 | not_relevant | 2 | 0 | The paper describes the metabolic pathways and CYP enzyme involvement for ospemifene but does not report any pharmacogenomic study linking specific gene variants/genotypes to changes in PK/PD parameters. |
| PGx | Turpeinen_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (effect of ospemifene on other drugs) and general CYP enzyme activity, but it does not report on genetic variants or pharmacogenomic factors affecting ospemifene pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:28 UTC</sub>
