<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D02B&quot;,&quot;href&quot;:&quot;atc/D02B.md&quot;},{&quot;label&quot;:&quot;aminobenzoic acid&quot;}]"></div>

# aminobenzoic acid

- **generic name:** aminobenzoic acid
- **ATC codes:** `D02BA01`
- **DrugBank:** [DB02362](https://go.drugbank.com/drugs/DB02362) · **PubChem:** [CID 978](https://pubchem.ncbi.nlm.nih.gov/compound/978)
- **molar mass:** 137.136 g/mol (C7H7NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Aminobenzoic acid (PABA) was used as a topical sunscreen to protect against UV radiation and to treat photodermatitis. It is no longer used in sunscreens, having been withdrawn from approved use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q284959](https://www.wikidata.org/wiki/Q284959) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:16 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 79,399/1,866 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aminobenzoic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: pobA (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Song_1996.pdf` | Song DJ et al., Determination of p-aminobenzoic acid an…, Journal of chromatography.… (1996) | popPK | 7 | [10.1016/0378-4347(95)00434-3](https://doi.org/10.1016/0378-4347(95)00434-3) | [8925104](https://pubmed.ncbi.nlm.nih.gov/8925104) | Reports IV PK parameters (one-compartment model, half-lives) for PABA in rabbits, but lacks specific numeric values for clearance or volume of distribution. |

<sub>queue written 2026-10-07T22:16:40.037381+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alig_1992 | irrelevant | 0 | 0 | The paper focuses on fibrinogen receptor antagonists; aminobenzoic acid is only mentioned as a structural moiety (m-aminobenzoic acid) within larger synthetic peptides, and no PK data for aminobenzoic acid itself is reported. |
| popPK | Bassetto_2019 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel blockers, not a pharmacokinetic study, and aminobenzoic acid is only a comparator for structural analogy. |
| popPK | Brain_2008 | irrelevant | 0 | 0 | The study investigates p-aminobenzoic acid as a biomarker of toxicity in *Lemna gibba* (duckweed) exposed to sulfamethoxazole, not as a pharmacokinetic subject drug in a mammalian or human system. |
| popPK | Butcher_2000 | irrelevant | 0 | 0 | The study focuses on the enzymatic down-regulation of NAT1 by p-aminobenzoic acid in cultured cells (in vitro) and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bwijo_2003 | irrelevant | 0 | 0 | The study investigates drug resistance mechanisms in malaria parasites, not the pharmacokinetics of aminobenzoic acid in a host species. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | The study is an in vitro toxicology assessment of skin sensitization potential, not a pharmacokinetic study, and aminobenzoic acid is used only as a negative control. |
| popPK | Jiang_2023 | irrelevant | 0 | 0 | The study investigates the antibacterial mechanism of p-aminobenzoic acid on soybean pathogens, not its pharmacokinetic disposition parameters. |
| popPK | Jin_2026 | irrelevant | 0 | 0 | The paper is a chemical biology study characterizing new benzoxazole natural products (goondoxazoles) and their anthelmintic activity against parasites, containing no pharmacokinetic data for aminobenzoic acid. |
| popPK | Nakazono_1991 | irrelevant | 0 | 0 | The provided evidence contains only metadata from the GROBID software and no scientific content regarding aminobenzoic acid pharmacokinetics. |
| popPK | Richter_2015 | irrelevant | 0 | 0 | The paper describes a yeast bioassay for detecting marine toxins using xenobiotic receptors, not a pharmacokinetic study of aminobenzoic acid. |
| popPK | Rodríguez-Romero_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of iopamidol and p-aminohippuric acid, using p-aminobenzoic acid only as an internal standard. |
| popPK | Santos_2020 | irrelevant | 0 | 0 | The paper is an electrochemical oxidation study of pollutants (methyl red and 2,4-DNa) where aminobenzoic acid is merely mentioned as a potential byproduct, not a subject of pharmacokinetic analysis. |
| popPK | St_1999 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of vascular contractility in rats using 3-aminobenzamide and 3-aminobenzoic acid as modulators, not a pharmacokinetic study reporting disposition parameters for aminobenzoic acid. |
| popPK | Zhu_2022 | irrelevant | 0 | 0 | The study investigates the diffusion and antifungal efficacy of fungicides (including p-aminobenzoic acid) in pear fruit, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
