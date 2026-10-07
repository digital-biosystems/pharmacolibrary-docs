<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefaloridine&quot;}]"></div>

# cefaloridine

- **generic name:** cefaloridine
- **ATC codes:** `J01DB02`
- **DrugBank:** [DB09008](https://go.drugbank.com/drugs/DB09008) · **PubChem:** [CID 5773](https://pubchem.ncbi.nlm.nih.gov/compound/5773)
- **molar mass:** 415.486 g/mol (C19H17N3O4S2) — DrugBank
- **groups:** approved, withdrawn

## About

Cefaloridine is a first-generation cephalosporin antibiotic used to treat bacterial infections. It has been withdrawn from use, mainly because it caused kidney damage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5063323](https://www.wikidata.org/wiki/Q5063323) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:47 | 1:33 | 0/0/0 | 0/1/0 | 0/0/0 | 20,909/1,480 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Kataoka_1983_concentration_in_prostatic_tissues](drugs/drug_cefaloridine/pd_Kataoka_1983_concentration_in_prostatic_tissues.md) | concentration in prostatic tissues ← Cefaloridine · model not identified | — | Kataoka N, [Concentration of antimicrobial agents…, Hinyokika kiyo. Acta urolog… (1983) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefaloridine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 45 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klimova_1981.pdf` | Klimova VS et al., [Cephalosporin pharmacokinetics in rabb…, Antibiotiki (1981) | popPK | 9 | not captured | [7235668](https://pubmed.ncbi.nlm.nih.gov/7235668) | The study describes a pharmacokinetic analysis of cefaloridine in rabbits using a one-compartment model, but no specific numeric parameter values are provided in the evidence text. |
| `Iakovlev_1978.pdf` | Iakovlev VP et al., [Pharmacokinetics of semisynthetic ceph…, Antibiotiki (1978) | popPK | 7 | not captured | [358914](https://pubmed.ncbi.nlm.nih.gov/358914) | The study reports quantitative pharmacokinetic parameters for cefaloridine in humans, but the specific numeric values are described qualitatively in the abstract without a provided data table. |
| `Paradelis_1977.pdf` | Paradelis AG et al., Pharmacokinetics of five cephalosporins…, Arzneimittel-Forschung (1977) | popPK | 7 | not captured | [580023](https://pubmed.ncbi.nlm.nih.gov/580023) | The study reports pharmacokinetic data for cefaloridine in humans, providing specific numeric values for Cmax, half-life, protein binding, and urinary recovery, although it lacks explicit clearance (CL) or volume (V) parameters. |

<sub>queue written 2026-10-07T10:47:12.132755+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andriole_1978 | irrelevant | 2 | 0 | This is a review paper that summarizes mean half-lives from other studies but does not report original quantitative PK parameters like clearance or volume, and specific numeric values are not present in the provided evidence. |
| popPK | Browning_1983 | irrelevant | 0 | 0 | The study focuses on renal toxicity and tubular secretion mechanisms in rabbits, not quantitative population pharmacokinetic parameters for cefaloridine. |
| popPK | Diao_2010 | irrelevant | 0 | 0 | The paper is a computational QSAR study focusing on transporter inhibition (OCTN2), and cefaloridine is only mentioned as a drug evaluated for transporter interaction, with no pharmacokinetic disposition parameters reported. |
| popPK | Iakovlev_1978 | relevant | 7 | 2 | The study reports quantitative pharmacokinetic parameters for cefaloridine in humans, but the specific numeric values are described qualitatively in the abstract without a provided data table. |
| popPK | Jackson_1974 | irrelevant | 2 | 0 | The study compares cephacetrile with a combination of cephalothin and cefaloridine, focusing on efficacy and safety rather than reporting quantitative PK parameters (CL, V, half-life) specifically for cefaloridine. |
| popPK | Klimova_1981 | relevant | 9 | 0 | The study describes a pharmacokinetic analysis of cefaloridine in rabbits using a one-compartment model, but no specific numeric parameter values are provided in the evidence text. |
| popPK | Kohda_2005 | irrelevant | 0 | 0 | The study focuses on the nephrotoxicity and mechanism of injury (ERK activation) of cefaloridine, not on its pharmacokinetic parameters (clearance, volume, half-life). |
| popPK | Luft_1984 | irrelevant | 1 | 0 | This is a nephrotoxicity study in rats where cefaloridine is a comparator agent, and no quantitative pharmacokinetic parameter values are reported in the evidence. |
| popPK | Naber_1976 | irrelevant | 0 | 0 | The study measures renal lymph concentrations of cefaloridine rather than reporting pharmacokinetic disposition parameters (CL, V, t1/2) or a PK model. |
| popPK | Nagashima_1994 | irrelevant | 0 | 0 | The study investigates the protective effects of an adenosine antagonist on cephaloridine-induced renal failure and does not report pharmacokinetic parameters for cephaloridine. |
| popPK | Regamey_1973 | irrelevant | 1 | 0 | The study focuses on cephanone as the subject drug, with cefaloridine mentioned only as a comparator without specific quantitative PK parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
