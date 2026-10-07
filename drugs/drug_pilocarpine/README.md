<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;pilocarpine&quot;}]"></div>

# pilocarpine

- **generic name:** pilocarpine
- **ATC codes:** `N07AX01`, `S01EB01`
- **DrugBank:** [DB01085](https://go.drugbank.com/drugs/DB01085) · **PubChem:** [CID 5910](https://pubchem.ncbi.nlm.nih.gov/compound/5910)
- **molar mass:** 208.2569 g/mol (C11H16N2O2) — DrugBank
- **groups:** approved, investigational

## About

Pilocarpine is a muscarinic agonist used to treat glaucoma, including angle-closure glaucoma, and dryness in head and neck cancer patients. It remains an approved medicine and is listed as a WHO essential medicine, used mainly in ophthalmology as an antiglaucoma miotic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411461](https://www.wikidata.org/wiki/Q411461) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:04 | 1:30 | 0/0/0 | 0/2/0 | 0/0/0 | 99,033/2,272 | ollama / glm-5.3-flash | 6 | 4/2 | 4/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cook_1987_contraction_of_rat_costo_uterine_muscle](drugs/drug_pilocarpine/pd_Cook_1987_contraction_of_rat_costo_uterine_muscle.md) | contraction of rat costo-uterine muscle ← pilocarpine · direct Emax (saturable) effect | — | Cook CJ et al., Cholinoreceptors in the isolated costo-…, Journal of autonomic pharma… (1987) | [10.1111/j.1474-8673.1987.tb00146.x](https://doi.org/10.1111/j.1474-8673.1987.tb00146.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mayer_2016_AA](drugs/drug_pilocarpine/pd_Mayer_2016_AA.md) | Displacement of radioactive tracer from muscarinic receptor binding site (anticholinergic activity) ← pilocarpine · direct sigmoid Emax (Hill) effect | — | Mayer T et al., Limitations of the Anticholinergic Acti…, The American journal of ger… (2016) | [10.1016/j.jagp.2016.07.024](https://doi.org/10.1016/j.jagp.2016.07.024) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pilocarpine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2A6` inhibitor/substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (partial agonist), CHRM5 (target), PON1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 73 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Conrad_1977.pdf` | Conrad JM et al., Aqueous chamber drug distribution volum…, Journal of pharmaceutical s… (1977) | popPK | 7 | [10.1002/jps.2600660222](https://doi.org/10.1002/jps.2600660222) | [839419](https://pubmed.ncbi.nlm.nih.gov/839419) | Original rabbit study reporting numeric apparent volumes of distribution (575 µL albino, 760 µL pigmented) and one-compartment kinetics for pilocarpine in aqueous humor. |

<sub>queue written 2026-10-07T02:04:07.357325+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Clinckers_2008 | irrelevant | 0 | 0 | The PK model is for MHD (oxcarbazepine metabolite); pilocarpine is only a convulsant agent used to induce seizures, not the subject drug. |
| popPK | Cook_1987 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study in rat tissue; pilocarpine is only an agonist/antagonist probe with EC50/pA2 values, no PK disposition parameters. |
| popPK | Eldefrawi_1977 | irrelevant | 0 | 0 | Pilocarpine is only a radioligand probe for muscarinic receptor binding in vitro; no pharmacokinetic parameters for pilocarpine are reported. |
| popPK | Falenski_2007 | irrelevant | 0 | 0 | Pilocarpine is only used to induce epilepsy in rats; no PK parameters are reported. |
| popPK | Goodman_2025 | irrelevant | 0 | 0 | Pilocarpine is only used to induce epilepsy in mice; no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Lai_2018 | irrelevant | 0 | 0 | This is an electrophysiology/toxicology study of sodium metabisulfite; pilocarpine is only used as a seizure-inducing agent, with no PK parameters reported. |
| popPK | Liberman_1989 | irrelevant | 0 | 0 | The study reports TRH pharmacokinetics in dogs; pilocarpine is only used as an epithelial stimulation agent with no PK parameters for it. |
| popPK | López-Meraz_2014 | irrelevant | 0 | 0 | Pilocarpine is only used to induce status epilepticus in rat pups; no PK parameters are reported. |
| popPK | Mawasi_2016 | irrelevant | 0 | 0 | PK parameters are for SPD, not pilocarpine, which is only used as a seizure-inducing agent. |
| popPK | Mayer_2016 | irrelevant | 0 | 0 | In-vitro receptor-binding assay with pilocarpine as a cholinergic comparator; no PK parameters reported. |
| popPK | Metzler-Wilson_2023 | irrelevant | 0 | 0 | Pilocarpine is only a local sweat-inducing agent; no PK disposition parameters (CL, V, ka, half-life) are reported anywhere in the evidence. |
| popPK | Müllauer_2012 | irrelevant | 0 | 0 | Pilocarpine is only used to induce status epilepticus; the PK model and all quantitative parameters concern (R)-[11C]verapamil, not pilocarpine. |
| popPK | Pimentel-Silva_2026 | irrelevant | 0 | 0 | Pilocarpine is only used as an epilepsy-inducing agent in an MRI study; no PK parameters are reported. |
| popPK | Reynaerts_2022 | irrelevant | 1 | 1 | Pilocarpine is only a diagnostic sweat-stimulus agent; the NLME model describes sweat secretion kinetics, not pilocarpine PK parameters, and no drug disposition values are given. |
| popPK | Salo_2017 | irrelevant | 0 | 0 | Pilocarpine is only used to induce status epilepticus; no PK parameters are reported. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | Pilocarpine is only used to induce seizures in a mouse model of a different drug (Cpd48); no pilocarpine PK parameters are reported. |
| popPK | Unno_2003 | irrelevant | 0 | 0 | In-vitro pharmacology study of muscarinic receptor signaling in guinea-pig ileum; pilocarpine is an agonist probe, no PK parameters reported. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | Pilocarpine is only used to induce seizures in mice; no PK parameters for pilocarpine are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
