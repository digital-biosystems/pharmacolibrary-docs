<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;vincamine&quot;}]"></div>

# vincamine

- **generic name:** vincamine
- **ATC codes:** `C04AX07`
- **DrugBank:** [DB13374](https://go.drugbank.com/drugs/DB13374) · **PubChem:** [CID 15376](https://pubchem.ncbi.nlm.nih.gov/compound/15376)
- **molar mass:** 354.45 g/mol (C21H26N2O3) — DrugBank
- **groups:** investigational

## About

**Description.** Vincamine is a monoterpenoid indole alkaloid obtained from the leaves of *Vinca minor* with a vasodilatory property. Studies indicate that vincamine increases the regional cerebral blood flow.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vincamine | parent | 354.45 | C21H26N2O3 | DrugBank | [15376](https://pubchem.ncbi.nlm.nih.gov/compound/15376) | Millart_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 09:54 | 1:15 | 0/1/0 | 0/0/0 | 0/0/0 | 2,591/2,976 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Millart_1983_reference](drugs/drug_vincamine/Vincamine_Millart1983_reference.md) | — | 1-compartment (no model) | 3 | Millart H et al., Pharmacokinetic study of two pharmaceut…, International journal of cl… (1983) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Juan_2005.pdf` | Juan YP et al., Measurement and pharmacokinetics of vin…, Journal of chromatography. A (2005) | popPK | 9 | [10.1016/j.chroma.2005.01.043](https://doi.org/10.1016/j.chroma.2005.01.043) | [16130744](https://pubmed.ncbi.nlm.nih.gov/16130744) | The paper describes a pharmacokinetic study of vincamine in rats using a compartmental model, but the specific numeric parameter values are not present in the provided evidence. |
| `Millart_1983.pdf` | Millart H et al., Pharmacokinetic study of two pharmaceut…, International journal of cl… (1983) | popPK | 9 | not captured | [6654533](https://pubmed.ncbi.nlm.nih.gov/6654533) | The study reports quantitative pharmacokinetic parameters (Tmax, Cmax, AUC, half-life) for vincamine in humans, with values explicitly present in the text. |
| `Siegers_1977.pdf` | Siegers CP et al., [Vincamine concentrations in plasma and…, Arzneimittel-Forschung (1977) | popPK | 9 | not captured | [578452](https://pubmed.ncbi.nlm.nih.gov/578452) | The study reports PK parameters for vincamine, including a two-compartment model and a mean beta half-life of 2 hours, but lacks specific numeric values for clearance, volume of distribution, or intercompartmental clearance. |
| `Kaneko_1991.pdf` | Kaneko S et al., Effects of several cerebroprotective dr…, European journal of pharmac… (1991) | pd | 4 | [10.1016/0922-4106(91)90086-w](https://doi.org/10.1016/0922-4106(91)90086-w) | [1652446](https://www.ncbi.nlm.nih.gov/pubmed/1652446) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-30T09:53:50.551911+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Braun_2019 | irrelevant | 0 | 0 | The study focuses on the behavioral and mechanistic effects of vindeburnol (a vincamine derivative) in an Alzheimer's disease mouse model, with no pharmacokinetic parameters reported. |
| popPK | Camón_1978 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| popPK | Juan_2005 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of vincamine in rats using a compartmental model, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PGx | Kong_2016 | not_relevant | 0 | 0 | The study investigates the effect of vinpocetine on CYP enzymes in vitro, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of vincamine. |
| popPK | Manda_2015 | irrelevant | 0 | 0 | The study focuses on vinpocetine (a derivative) and evaluates in-vitro enzyme inhibition (CYP/P-gp) rather than reporting pharmacokinetic disposition parameters for vincamine. |
| PD | Manda_2015 | not_relevant | 0 | 0 | The paper reports in vitro pharmacokinetic interaction parameters (IC50/EC50 for CYPs and P-gp) for vinpocetine, not a pharmacodynamic exposure-response or dose-response relationship for vincamine. |
| PGx | Manda_2015 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction potential of vinpocetine (a derivative) on CYPs and P-gp, but does not report any pharmacogenomic effects (gene variants) on the PK/PD of vincamine. |
| popPK | Norwood_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the antimalarial activity (EC50) of vincamine analogues, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rognoni_1977 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Siegers_1977 | relevant | 9 | 4 | The study reports PK parameters for vincamine, including a two-compartment model and a mean beta half-life of 2 hours, but lacks specific numeric values for clearance, volume of distribution, or intercompartmental clearance. |
| popPK | Vereczkey_1979 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vinpocetine (a vincamine derivative), not vincamine itself. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on vincamine derivatives for diabetes, reporting biological activity (EC50) rather than pharmacokinetic parameters. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a natural product isolation and biological activity study (vasorelaxant/cytotoxicity) that does not report any pharmacokinetic parameters for vincamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 17:24 UTC</sub>
