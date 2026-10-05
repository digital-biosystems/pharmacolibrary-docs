<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;melagatran&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melagatran_Eriksson2003_reference&quot;,&quot;label&quot;:&quot;Eriksson_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melagatran/Melagatran_Eriksson2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# melagatran

- **generic name:** melagatran
- **ATC codes:** `B01AE04`
- **DrugBank:** [DB13616](https://go.drugbank.com/drugs/DB13616) · **PubChem:** not captured
- **molar mass:** 429.5126 g/mol (C22H31N5O4) — DrugBank
- **groups:** investigational

## About

Melagatran is a direct thrombin inhibitor that was investigated as an antithrombotic drug for preventing or treating blood clots. It remained an investigational compound and was never authorised for general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27084209](https://www.wikidata.org/wiki/Q27084209) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| melagatran | parent | 429.513 | C22H31N5O4 | DrugBank | — | Cullberg_2005, Eriksson_2003 |
| ximelagatran | metabolite | 473.574 | C24H35N5O5 | PubChem | [9574101](https://pubchem.ncbi.nlm.nih.gov/compound/9574101) | Cullberg_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:00 | 4:15 | 0/1/1 | 0/0/0 | 0/0/0 | 45,834/11,264 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.455). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Cullberg_2005_reference](drugs/drug_melagatran/Melagatran_Cullberg2005_reference.md) | held back | 1-compartment, oral | 3 | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: biomarker_kinetics_as_drug_pk</sub><br><sub>route_to: `scholar`</sub> | [Eriksson_2003_reference](drugs/drug_melagatran/Melagatran_Eriksson2003_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=melagatran) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F10 (inhibitor), F2 (inhibitor), PLG (inhibitor), PRSS1 (inhibitor).</sub>

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

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bååthe_2006.pdf` | Bååthe S et al., Population pharmacokinetics of melagatr…, Clinical pharmacokinetics (2006) | popPK | 10 | [10.2165/00003088-200645080-00004](https://doi.org/10.2165/00003088-200645080-00004) | [16884319](https://pubmed.ncbi.nlm.nih.gov/16884319) | The paper describes a population PK model for melagatran in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Cullberg_2005.pdf` | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | popPK | 10 | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) | [15903126](https://pubmed.ncbi.nlm.nih.gov/15903126) | The abstract explicitly reports population mean clearance (27.3 L/h) and volume of distribution (176 L) for melagatran. |
| `Eriksson_2003.pdf` | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | popPK | 10 | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) | [12844328](https://pubmed.ncbi.nlm.nih.gov/12844328) | The paper reports a population pharmacokinetic model for melagatran in humans with specific numeric values for clearance and volume of distribution provided in the abstract. |
| `Bergqvist_2004.pdf` | Bergqvist D et al., Pharmacokinetics, preliminary efficacy…, Clinical drug investigation (2004) | popPK | 8 | [10.2165/00044011-200424030-00001](https://doi.org/10.2165/00044011-200424030-00001) | [17516699](https://pubmed.ncbi.nlm.nih.gov/17516699) | The study reports a one-compartment PK model and bioavailability for melagatran, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |
| `Bredberg_2003.pdf` | Bredberg E et al., Ximelagatran, an oral direct thrombin i…, Clinical pharmacokinetics (2003) | pgx | 7 | [10.2165/00003088-200342080-00005](https://doi.org/10.2165/00003088-200342080-00005) | [12846597](https://www.ncbi.nlm.nih.gov/pubmed/12846597) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-05T14:56:36.969509+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergqvist_2004 | relevant | 8 | 2 | The study reports a one-compartment PK model and bioavailability for melagatran, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |
| PGx | Bredberg_2003 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving CYP enzymes, not pharmacogenomic effects of gene variants on melagatran PK/PD. |
| popPK | Bååthe_2006 | relevant | 10 | 2 | The paper describes a population PK model for melagatran in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | The paper describes in vitro biotransformation mechanisms of ximelagatran to melagatran but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Elg_1997 | irrelevant | 1 | 0 | The study focuses on enzyme inhibition kinetics (Ki, kon) and antithrombotic efficacy in a rat model, not on the pharmacokinetic disposition parameters (CL, V, ka) of melagatran. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The paper is a general pharmacological review of direct thrombin inhibitors and does not report any pharmacogenomic effects or gene-variant specific PK/PD data for melagatran. |
| popPK | Nylander_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet activation and does not report pharmacokinetic parameters for melagatran. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 14:56 UTC</sub>
