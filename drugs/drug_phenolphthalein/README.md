<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;phenolphthalein&quot;}]"></div>

# phenolphthalein

- **generic name:** phenolphthalein
- **ATC codes:** `A06AB04`
- **DrugBank:** [DB04824](https://go.drugbank.com/drugs/DB04824) · **PubChem:** [CID 4764](https://pubchem.ncbi.nlm.nih.gov/compound/4764)
- **molar mass:** 318.3228 g/mol (C20H14O4) — DrugBank
- **groups:** approved, withdrawn

## About

Phenolphthalein was a contact laxative used to treat constipation. It has been withdrawn from use because it was found to be a carcinogen.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q187921](https://www.wikidata.org/wiki/Q187921) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenolphthalein di[35S]sulphate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:42 | 2:27 | 0/1/0 | 0/0/0 | 0/0/0 | 38,709/6,187 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Powell_1975_reference](drugs/drug_phenolphthalein/Phenolphthalein_Powell1975_reference.md) | — | 1-compartment (no model) | 0 | Powell GM et al., A model system for investigating the bi…, The Biochemical journal (1975) | [10.1042/bj1480303](https://doi.org/10.1042/bj1480303) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenolphthalein) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT1A9` unknown | DrugBank actor |
| metabolism | liver | `UGT1A9` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), NR1I2 (unknown), NR1I3 (unknown), SHBG (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lewis_2007.pdf` | Lewis BC et al., Amino terminal domains of human UDP-glu…, Biochemical pharmacology (2007) | pd | 4 | [10.1016/j.bcp.2006.12.021](https://doi.org/10.1016/j.bcp.2006.12.021) | [17223084](https://www.ncbi.nlm.nih.gov/pubmed/17223084) | metadata signals extractable PD data (sigmoid) |
| `Ghosal_2011.pdf` | Ghosal A et al., Characterization of human liver enzymes…, Drug metabolism and disposi… (2011) | pgx | 7 | [10.1124/dmd.110.036996](https://doi.org/10.1124/dmd.110.036996) | [21123164](https://www.ncbi.nlm.nih.gov/pubmed/21123164) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T17:39:48.155652+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on the biotransformation of boceprevir, and phenolphthalein is only mentioned as an inhibitor used to characterize the enzyme AKR1C2, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Lewis_2007 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Lewis_2007 | not_relevant | 0 | 0 | The paper focuses on the structural and functional characterization of UGT enzymes (substrate selectivity and autoactivation) and does not report pharmacodynamic or exposure-response relationships for phenolphthalein. |
| PGx | Lewis_2007 | not_relevant | 0 | 0 | The paper focuses on the structural domains of UGT enzymes and their substrate selectivity/autoactivation, not on the pharmacokinetics or pharmacodynamics of phenolphthalein. |
| popPK | Rao_1976 | irrelevant | 0 | 0 | The study is an in-vitro enzyme kinetics investigation of estrone glucuronyltransferase in pig kidney, where phenolphthalein is used only as an inhibitor, not as the subject drug for PK parameter estimation. |
| PD | Rao_1976 | not_relevant | 0 | 0 | The paper investigates the enzyme kinetics of estrone glucuronyltransferase and mentions phenolphthalein only as a noncompetitive inhibitor without providing specific numeric PD parameters (e.g., Ki, IC50) or an exposure-response relationship for phenolphthalein. |
| popPK | Rosemond_2004 | irrelevant | 0 | 0 | Phenolphthalein is used only as a chemical inhibitor in an in-vitro enzymology study of S-1360, with no pharmacokinetic parameters reported for phenolphthalein itself. |
| PD | Rosemond_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzymology and inhibition kinetics for S-1360 metabolism; phenolphthalein is used only as a chemical inhibitor to identify the enzyme family, not as a drug with a pharmacodynamic exposure-response relationship. |
| PGx | Uesawa_2007 | not_relevant | 0 | 0 | The paper focuses on the metabolism of dulcin and does not report pharmacogenomic effects on the PK or PD parameters of phenolphthalein. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 17:39 UTC</sub>
