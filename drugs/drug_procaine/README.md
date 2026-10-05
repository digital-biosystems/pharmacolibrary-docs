<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;procaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procaine_Seifen1979_reference&quot;,&quot;label&quot;:&quot;Seifen_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procaine/Procaine_Seifen1979_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# procaine

- **generic name:** procaine
- **ATC codes:** `C05AD05`, `N01BA02`, `S01HA05`
- **DrugBank:** [DB00721](https://go.drugbank.com/drugs/DB00721) · **PubChem:** [CID 4914](https://pubchem.ncbi.nlm.nih.gov/compound/4914)
- **molar mass:** 236.3101 g/mol (C13H20N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Procaine is a local anesthetic used to relieve pain, for example in procedures involving the skin, eye, or hemorrhoids. It is an approved drug, also approved for veterinary use, and remains in use mainly as a local anesthetic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423741](https://www.wikidata.org/wiki/Q423741) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| procaine | parent | 236.31 | C13H20N2O2 | DrugBank | [4914](https://pubchem.ncbi.nlm.nih.gov/compound/4914) | Seifen_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 19:47 | 2:39 | 1/0/0 | 0/0/0 | 0/0/0 | 38,524/6,050 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span> | [Seifen_1979_reference](drugs/drug_procaine/Procaine_Seifen1979_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Seifen AB et al., Pharmacokinetics of intravenous procain…, Anesthesia and analgesia (1979) | [10.1213/00000539-197909000-00007](https://doi.org/10.1213/00000539-197909000-00007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=procaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor/substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ASPG (inhibitor), CHRNA2 (target), DNMT1 (inhibitor), DNMT3A (inhibitor), GRIN3A (target), HTR3A (target), KCNMA1 (blocker), PLA2G4A (inhibitor), SCN10A (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Seifen_1979.pdf` | Seifen AB et al., Pharmacokinetics of intravenous procain…, Anesthesia and analgesia (1979) | popPK | 10 | [10.1213/00000539-197909000-00007](https://doi.org/10.1213/00000539-197909000-00007) | [573562](https://pubmed.ncbi.nlm.nih.gov/573562) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-lives) for procaine in humans, with all numeric values explicitly present in the text. |
| `Gadalla_1985.pdf` | Gadalla MA et al., Serum levels of procaine in human after…, Die Pharmazie (1985) | popPK | 9 | not captured | [4001146](https://pubmed.ncbi.nlm.nih.gov/4001146) | The paper describes a pharmacokinetic study of procaine in humans using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |
| `Nakazono_1991.pdf` | Nakazono T et al., Study on brain uptake of local anesthet…, Journal of pharmacobio-dyna… (1991) | popPK | 8 | [10.1248/bpb1978.14.605](https://doi.org/10.1248/bpb1978.14.605) | [1808237](https://pubmed.ncbi.nlm.nih.gov/1808237) | The study reports PK modeling (2-compartment) for procaine in rats, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided text, only the brain-to-plasma partition coefficient (Kp). |

<sub>queue written 2026-09-28T19:45:02.223401+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gadalla_1985 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of procaine in humans using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |
| popPK | Lallemand_2023 | irrelevant | 2 | 1 | The study focuses on the pharmacokinetics of benzylpenicillin (BP), with procaine serving only as a salt/formulation component rather than the subject drug for PK parameter estimation. |
| PD | Lallemand_2023 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PK) and the calculation of PK/PD cutoffs (fAUC/MIC, fT&gt;MIC) for antimicrobial susceptibility testing, but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for procaine or benzylpenicillin. |
| popPK | Nakazono_1991 | relevant | 8 | 2 | The study reports PK modeling (2-compartment) for procaine in rats, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided text, only the brain-to-plasma partition coefficient (Kp). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 19:45 UTC</sub>
