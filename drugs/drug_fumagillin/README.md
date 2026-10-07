<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;fumagillin&quot;}]"></div>

# fumagillin

- **generic name:** fumagillin
- **ATC codes:** `P01AX10`
- **DrugBank:** [DB02640](https://go.drugbank.com/drugs/DB02640) · **PubChem:** [CID 6917655](https://pubchem.ncbi.nlm.nih.gov/compound/6917655)
- **molar mass:** 458.551 g/mol (C26H34O7) — DrugBank
- **groups:** experimental

## About

Fumagillin is an antibiotic-like compound with antiprotozoal and angiogenesis-inhibiting activity, studied against protozoal infections. It is not an established marketed medicine; DrugBank classifies it as experimental, so its use remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q120199](https://www.wikidata.org/wiki/Q120199) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fumagillin | parent | 458.551 | C26H34O7 | DrugBank | [6917655](https://pubchem.ncbi.nlm.nih.gov/compound/6917655) | Laurén_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:37 | 0:43 | 0/1/0 | 1/0/1 | 0/0/0 | 17,301/1,637 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Laurén_1989_reference](drugs/drug_fumagillin/Fumagillin_Laurn1989_reference.md) | — | 1-compartment (no model) | 3 | Laurén DJ et al., Toxicity and pharmacokinetics of the an…, Toxicology and applied phar… (1989) | [10.1016/0041-008x(89)90173-7](https://doi.org/10.1016/0041-008x(89)90173-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Park_2014_EC50](drugs/drug_fumagillin/pd_Park_2014_EC50.md) | parasite killing of Azumiobodo hoyamushi (24-h EC50) ← fumagillin · inhibition effect | — | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Dupuy_2006_Rho_123](drugs/drug_fumagillin/pd_Dupuy_2006_Rho_123.md) | intracellular rhodamine 123 accumulation (% of VSP) ← fumagillin · direct sigmoid Emax (Hill) effect | — | Dupuy J et al., Fumagillin, a new P-glycoprotein-interf…, Journal of veterinary pharm… (2006) | [10.1111/j.1365-2885.2006.00780.x](https://doi.org/10.1111/j.1365-2885.2006.00780.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fumagillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: METAP2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Laurén_1989.pdf` | Laurén DJ et al., Toxicity and pharmacokinetics of the an…, Toxicology and applied phar… (1989) | popPK | 8 | [10.1016/0041-008x(89)90173-7](https://doi.org/10.1016/0041-008x(89)90173-7) | [2718173](https://pubmed.ncbi.nlm.nih.gov/2718173) | Two-compartment PK in trout with alpha/beta half-lives reported in the abstract, but full microconstants (CL, V) are not given numerically. |
| `Dupuy_2006.pdf` | Dupuy J et al., Fumagillin, a new P-glycoprotein-interf…, Journal of veterinary pharm… (2006) | pd | 4 | [10.1111/j.1365-2885.2006.00780.x](https://doi.org/10.1111/j.1365-2885.2006.00780.x) | [17083452](https://www.ncbi.nlm.nih.gov/pubmed/17083452) | metadata signals extractable PD data (EC50) |
| `Park_2014.pdf` | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | pd | 4 | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) | [23952334](https://www.ncbi.nlm.nih.gov/pubmed/23952334) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T05:37:34.066830+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arico-Muendel_2013 | not_relevant | 0 | 0 | Paper describes PPI-2458 metabolism and MetAP2 inhibition but reports no gene variant/genotype effects on PK or PD parameters. |
| popPK | Dupuy_2006 | irrelevant | 0 | 0 | Fumagillin is only a P-gp-interfering co-agent studied in vitro; no PK disposition parameters for fumagillin itself are reported. |
| popPK | Park_2014 | irrelevant | 0 | 0 | Fumagillin is only one of many drugs screened for antiparasitic EC50 efficacy; no pharmacokinetic disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:37 UTC</sub>
