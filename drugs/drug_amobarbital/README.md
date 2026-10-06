<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;amobarbital&quot;}]"></div>

# amobarbital

- **generic name:** amobarbital
- **ATC codes:** `N05CA02`
- **DrugBank:** [DB01351](https://go.drugbank.com/drugs/DB01351) · **PubChem:** [CID 2164](https://pubchem.ncbi.nlm.nih.gov/compound/2164)
- **molar mass:** 226.2722 g/mol (C11H18N2O3) — DrugBank
- **groups:** approved, illicit, investigational

## About

Amobarbital is a barbiturate sedative-hypnotic used for anxiety, insomnia, and status epilepticus. It is no longer widely prescribed; barbiturates like amobarbital are now used only rarely and in restricted settings, largely replaced by safer drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415850](https://www.wikidata.org/wiki/Q415850) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:41 | 1:01 | 0/1/0 | 3/0/0 | 0/0/0 | 21,544/2,244 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mandema_1991_reference](drugs/drug_amobarbital/Amobarbital_Mandema1991_reference.md) | — | 1-compartment (no model) | 0 | Mandema JW et al., Estimation of amobarbital plasma-effect…, Journal of pharmacokinetics… (1991) | [10.1007/BF01080870](https://doi.org/10.1007/BF01080870) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1991_EEG](drugs/drug_amobarbital/pd_Mandema_1991_EEG.md) | EEG effect measure (amplitudes in the 2.5-30 Hz frequency band, aperiodic analysis) ← amobarbital · delayed effect through an effect compartment | — | Mandema JW et al., Estimation of amobarbital plasma-effect…, Journal of pharmacokinetics… (1991) | [10.1007/BF01080870](https://doi.org/10.1007/BF01080870) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mathers_2007_IPSC_decay_time_constant](drugs/drug_amobarbital/pd_Mathers_2007_IPSC_decay_time_constant.md) | decay time constant of GABA(A)ergic IPSCs ← amobarbital · direct sigmoid Emax (Hill) effect | — | Mathers DA et al., Barbiturate activation and modulation o…, Neuropharmacology (2007) | [10.1016/j.neuropharm.2006.12.004](https://doi.org/10.1016/j.neuropharm.2006.12.004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Veng-Pedersen_1991_effect_response_amobarbital_PD_effect](drugs/drug_amobarbital/pd_Veng_Pedersen_1991_effect_response_amobarbital_PD_effect.md) | effect response (amobarbital PD effect) ← amobarbital · delayed effect through transit (transduction) compartments | — | Veng-Pedersen P et al., A system approach to pharmacodynamics.…, Journal of pharmaceutical s… (1991) | [10.1002/jps.2600800518](https://doi.org/10.1002/jps.2600800518) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amobarbital) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mandema_1991.pdf` | Mandema JW et al., Estimation of amobarbital plasma-effect…, Journal of pharmacokinetics… (1991) | popPK | 7 | [10.1007/BF01080870](https://doi.org/10.1007/BF01080870) | [1815044](https://pubmed.ncbi.nlm.nih.gov/1815044) | Rat PK/effect-site equilibration study with numeric equilibration parameters (t50, t95, conductance structure) present, though full disposition parameters (CL, V) are not given. |
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 7 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | Amobarbital is a subject drug with a one-compartment PK model in intoxicated patients, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| `Reilly_1978.pdf` | Reilly PA et al., Enzyme induction following a single dos…, Journal of pharmacokinetics… (1978) | popPK | 6 | [10.1007/BF01060094](https://doi.org/10.1007/BF01060094) | [702272](https://pubmed.ncbi.nlm.nih.gov/702272) | PK of amobarbital in dogs with kinetic characterization, but no numeric parameter values (half-lives, CL, V) appear in the evidence. |
| `Veng-Pedersen_1991.pdf` | Veng-Pedersen P et al., A system approach to pharmacodynamics.…, Journal of pharmaceutical s… (1991) | pd | 4 | [10.1002/jps.2600800518](https://doi.org/10.1002/jps.2600800518) | [1880731](https://www.ncbi.nlm.nih.gov/pubmed/1880731) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Foster_1997.pdf` | Foster RH et al., Paroxetine : a review of its pharmacolo…, CNS drugs (1997) | pgx | 8 | [10.2165/00023210-199708020-00010](https://doi.org/10.2165/00023210-199708020-00010) | [23338224](https://www.ncbi.nlm.nih.gov/pubmed/23338224) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T19:41:04.267402+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brien_1975 | irrelevant | 4 | 1 | Amobarbital is used only as a probe compared with phenytoin; its half-life is referenced but no numeric amobarbital PK values are given. |
| PGx | Foster_1997 | not_relevant | 0 | 0 | Paper is a review of paroxetine for panic disorder; no pharmacogenomic effect on amobarbital PK/PD reported. |
| PGx | Lähdesmäki_1999 | not_relevant | 0 | 0 | Paper describes an oxygen-consumption sensing method using amobarbital only as a metabolic inhibitor; no gene variant or pharmacogenomic effect on PK/PD parameters is reported. |
| popPK | Mathers_2007 | irrelevant | 0 | 0 | In-vitro electrophysiology study of barbiturate effects on GABA(A) receptors in rat brain slices; no pharmacokinetic disposition parameters reported. |
| popPK | Reilly_1978 | relevant | 6 | 2 | PK of amobarbital in dogs with kinetic characterization, but no numeric parameter values (half-lives, CL, V) appear in the evidence. |
| PGx | Toide_2004 | not_relevant | 2 | 3 | Correlation of amobarbital N-glucosyltransferase with AS-3201 activity across livers; no gene variant/genotype effect on amobarbital PK/PD reported. |
| popPK | Veng-Pedersen_1991 | irrelevant | 2 | 1 | This is a pharmacodynamic modeling paper using amobarbital as an example; no numeric PK disposition parameters (CL, V, half-life) are reported in the evidence. |
| popPK | Verpooten_1982 | relevant | 7 | 2 | Amobarbital is a subject drug with a one-compartment PK model in intoxicated patients, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| popPK | Yost_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor inhibition; no pharmacokinetic parameters for amobarbital are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:41 UTC</sub>
