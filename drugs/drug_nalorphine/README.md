<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;nalorphine&quot;}]"></div>

# nalorphine

- **generic name:** nalorphine
- **ATC codes:** `V03AB02`
- **DrugBank:** [DB11490](https://go.drugbank.com/drugs/DB11490) · **PubChem:** not captured
- **molar mass:** 311.381 g/mol (C19H21NO3) — DrugBank
- **groups:** experimental, vet_approved

## About

Nalorphine is an opioid antagonist that was used as an antidote, mainly to reverse opioid overdose.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2622916](https://www.wikidata.org/wiki/Q2622916) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:10 | 2:19 | 0/0/0 | 3/1/0 | 0/0/0 | 90,423/3,329 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Stevens_1994_analgesia_acetic_acid_test](drugs/drug_nalorphine/pd_Stevens_1994_analgesia_acetic_acid_test.md) | analgesia (acetic acid test) ← nalorphine · direct log-linear effect | — | Stevens CW et al., Analgesic potency of mu and kappa opioi…, The Journal of pharmacology… (1994) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Stevens_1996_analgesia_acetic_acid_test](drugs/drug_nalorphine/pd_Stevens_1996_analgesia_acetic_acid_test.md) | analgesia (acetic acid test) ← nalorphine · stimulation effect | — | Stevens CW, Relative analgesic potency of mu, delta…, The Journal of pharmacology… (1996) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhu_1997_35S_GTPgammaS_binding](drugs/drug_nalorphine/pd_Zhu_1997_35S_GTPgammaS_binding.md) | [35S]GTPgammaS binding to CHO cell membranes expressing human kappa opioid receptor ← nalorphine · direct Emax (saturable) effect | — | Zhu J et al., Activation of the cloned human kappa op…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Govitrapong_1992_Inhibition_of_3H_diprenorphine_binding_to_bovine_pineal_opioid_receptors](drugs/drug_nalorphine/pd_Govitrapong_1992_Inhibition_of_3H_diprenorphine_binding_to_b.md) | Inhibition of [3H]-diprenorphine binding to bovine pineal opioid receptors ← nalorphine · inhibition effect | — | Govitrapong P et al., The presence and actions of opioid rece…, Journal of pineal research (1992) | [10.1111/j.1600-079x.1992.tb00066.x](https://doi.org/10.1111/j.1600-079x.1992.tb00066.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nalorphine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: OPRK1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 53 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mosaddeghi_1995.pdf` | Mosaddeghi M et al., Effects of kappa-opioid receptor agonis…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0922-4106(95)90149-3](https://doi.org/10.1016/0922-4106(95)90149-3) | [7556409](https://www.ncbi.nlm.nih.gov/pubmed/7556409) | metadata signals extractable PD data (EC50) |
| `Vaught_1978.pdf` | Vaught JL et al., Characterization of leucine and methion…, Research communications in… (1978) | pd | 4 | not captured | [705020](https://www.ncbi.nlm.nih.gov/pubmed/705020) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T19:09:34.838681+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cantalamessa_1982 | irrelevant | 0 | 0 | Pharmacodynamic study of naloxone on drinking behavior in rats; no PK parameters for nalorphine. |
| popPK | Carroll_1972 | irrelevant | 0 | 0 | Nalorphine is only used as a morphine antagonist in a behavioral study; no PK parameters reported. |
| popPK | Connor_1996 | irrelevant | 0 | 0 | In-vitro electrophysiology study where nalorphine is only used as an antagonist tool; no PK parameters for nalorphine. |
| popPK | Emmerson_1996 | irrelevant | 0 | 0 | In-vitro receptor binding/efficacy study; nalorphine is only one comparator ligand with no PK disposition parameters. |
| PGx | Green_1997 | not_relevant | 2 | 3 | Reports nalorphine as a UGT2B9 substrate in expressed monkey enzyme, but no gene variant/genotype effect on PK/PD parameters is described. |
| popPK | Groenendaal_2007 | irrelevant | 0 | 0 | The study models morphine, not nalorphine; no nalorphine parameters are reported. |
| popPK | Hayes_1985 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study; nalorphine is only a test ligand, no PK parameters reported. |
| popPK | Hayes_1985_2 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study; nalorphine is only a test agonist, no PK parameters reported. |
| popPK | Holtzman_1976 | irrelevant | 0 | 0 | Behavioral pharmacology study with no PK parameters for nalorphine; only potency ratios reported. |
| popPK | Hughes_1975 | irrelevant | 0 | 0 | In-vitro pharmacodynamic potency study of opioids in mouse vas deferens; nalorphine is only an antagonist comparator with no PK parameters. |
| popPK | Luján_1981 | irrelevant | 0 | 0 | In-vitro guinea-pig ileum pharmacology study; nalorphine is only a comparator, no PK parameters reported. |
| popPK | Mosaddeghi_1995 | irrelevant | 0 | 0 | In-vitro mechanistic study of kappa-opioid agonist effects on phosphoinositide hydrolysis in rat kidney slices; nalorphine is a test agent, no PK parameters reported. |
| popPK | Pchelintsev_1991 | irrelevant | 0 | 0 | This is a pharmacodynamic (ED50 potency/efficacy) abuse-potential study in mice, not a PK study with disposition parameters for nalorphine. |
| popPK | Pearl_1968 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Rundlett_1976 | irrelevant | 1 | 0 | Pharmacodynamic (analgesia/respiration) comparison in mice and rats with no PK disposition parameters reported. |
| popPK | Schaefer_1978 | irrelevant | 0 | 0 | Behavioral drug-discrimination study in monkeys; nalorphine only tested for generalization, no PK parameters reported. |
| popPK | Shannon_1977 | irrelevant | 0 | 0 | Behavioral drug-discrimination study in rats; nalorphine is only a test agent with no PK parameters reported. |
| popPK | Sim_1985 | irrelevant | 0 | 0 | In vitro pharmacology study of opioid effects on toad rectus muscle contraction; no PK parameters for nalorphine. |
| popPK | Stevens_1994 | irrelevant | 0 | 0 | This is a pharmacodynamic analgesic potency (ED50) study in frogs, with no PK disposition parameters for nalorphine. |
| popPK | Stevens_1996 | irrelevant | 0 | 0 | Pharmacodynamic potency (ED50) study of opioids in frogs, not a PK study with disposition parameters for nalorphine. |
| popPK | Teiger_1976 | irrelevant | 0 | 0 | This is a pharmacodynamic antinociception test in guinea pigs; nalorphine is only a test drug with no PK parameters reported. |
| popPK | Tyers_1980 | irrelevant | 0 | 0 | Pharmacology/antinociception study with no PK parameters for nalorphine; only dose-response potency data. |
| popPK | Ward_1982 | irrelevant | 0 | 0 | Pharmacodynamic study of opioid effects on intestinal transit in mice; no PK parameters for nalorphine are reported. |
| popPK | Zhu_1997 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study; nalorphine is only a ligand tested for kappa receptor potency, with no PK parameters. |
| popPK | Zimmerman_1987 | irrelevant | 0 | 0 | Receptor pharmacology study of analgesic dose-response shifts in mice; no PK disposition parameters for nalorphine are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
