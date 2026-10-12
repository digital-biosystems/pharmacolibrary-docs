<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;pentobarbital&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pentobarbital_Frederiksen1983_reference&quot;,&quot;label&quot;:&quot;Frederiksen_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Frederiksen1983_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pentobarbital_Helfer2026_reference&quot;,&quot;label&quot;:&quot;Helfer_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pentobarbital_Ketharanathan2023_base&quot;,&quot;label&quot;:&quot;Ketharanathan_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_base.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pentobarbital_Ketharanathan2023_final&quot;,&quot;label&quot;:&quot;Ketharanathan_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_final.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pentobarbital

- **generic name:** pentobarbital
- **ATC codes:** `N05CA01`
- **DrugBank:** [DB00312](https://go.drugbank.com/drugs/DB00312) · **PubChem:** [CID 4737](https://pubchem.ncbi.nlm.nih.gov/compound/4737)
- **molar mass:** 226.2722 g/mol (C11H18N2O3) — DrugBank
- **groups:** approved, vet_approved

## About

Pentobarbital is a barbiturate sedative-hypnotic used as a hypnotic and sedative, and to treat status epilepticus. It remains an approved medicine and is also approved for veterinary use, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409632](https://www.wikidata.org/wiki/Q409632) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pentobarbital | parent | 226.272 | C11H18N2O3 | DrugBank | [4737](https://pubchem.ncbi.nlm.nih.gov/compound/4737) | Frederiksen_1983, Helfer_2026, Ketharanathan_2023, Zuppa_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:45 | 2:31 | 4/1/0 | 2/1/0 | 0/0/0 | 127,002/7,996 | ollama / glm-5.3-flash | 5 | 1/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Frederiksen_1983_reference](drugs/drug_pentobarbital/Pentobarbital_Frederiksen1983_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Frederiksen MC et al., Pharmacokinetics of pentobarbital in th…, The Journal of pharmacology… (1983) | — |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Helfer_2026_reference](drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Helfer VE et al., Population Pharmacokinetics and Dosing…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70204](https://doi.org/10.1002/jcph.70204) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Ketharanathan_2023_base](drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_base.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ketharanathan N et al., A Population Pharmacokinetic Model of P…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01249-z](https://doi.org/10.1007/s40262-023-01249-z) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Ketharanathan_2023_final](drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_final.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ketharanathan N et al., A Population Pharmacokinetic Model of P…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01249-z](https://doi.org/10.1007/s40262-023-01249-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zuppa_2011_reference](drugs/drug_pentobarbital/Pentobarbital_Zuppa2011_reference.md) | — | 2-compartment (no model) | 3 | Zuppa AF et al., Population pharmacokinetics of pentobar…, The Journal of pediatrics (2011) | [10.1016/j.jpeds.2011.04.021](https://doi.org/10.1016/j.jpeds.2011.04.021) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mathers_2007_IPSC_decay_tau](drugs/drug_pentobarbital/pd_Mathers_2007_IPSC_decay_tau.md) | decay time constant of GABA(A)ergic IPSCs ← pentobarbital · direct Emax (saturable) effect | — | Mathers DA et al., Barbiturate activation and modulation o…, Neuropharmacology (2007) | [10.1016/j.neuropharm.2006.12.004](https://doi.org/10.1016/j.neuropharm.2006.12.004) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Todorovic_1998_T_current](drugs/drug_pentobarbital/pd_Todorovic_1998_T_current.md) | T-type Ca2+ current block ← pentobarbital · direct sigmoid Emax (Hill) effect | — | Todorovic SM et al., Pharmacological properties of T-type Ca…, Journal of neurophysiology (1998) | [10.1152/jn.1998.79.1.240](https://doi.org/10.1152/jn.1998.79.1.240) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Akaike_1985_ICl](drugs/drug_pentobarbital/pd_Akaike_1985_ICl.md) | pentobarbitone-induced chloride current ← pentobarbitone · direct sigmoid Emax (Hill) effect | — | Akaike N et al., gamma-Aminobutyric-acid- and pentobarbi…, The Journal of physiology (1985) | [10.1113/jphysiol.1985.sp015622](https://doi.org/10.1113/jphysiol.1985.sp015622) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pentobarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2A6` inducer, `CYP2C19` substrate, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (positive allosteric modulator), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), GRIN1 (target), NR1I2 (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 235 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 4  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Frederiksen_1983.pdf` | Frederiksen MC et al., Pharmacokinetics of pentobarbital in th…, The Journal of pharmacology… (1983) | popPK | 10 | not captured | [6842399](https://pubmed.ncbi.nlm.nih.gov/6842399) | Original PK study in dogs with numeric CL, Vss, and half-life reported directly in the abstract. |
| `Zuppa_2011.pdf` | Zuppa AF et al., Population pharmacokinetics of pentobar…, The Journal of pediatrics (2011) | popPK | 10 | [10.1016/j.jpeds.2011.04.021](https://doi.org/10.1016/j.jpeds.2011.04.021) | [21665222](https://pubmed.ncbi.nlm.nih.gov/21665222) | Population PK model of pentobarbital in children with numeric CL, V1, and peripheral volume values reported directly in the abstract. |
| `Short_1985.pdf` | Short CR et al., Pharmacokinetics of pentobarbital and t…, Journal of veterinary pharm… (1985) | popPK | 8 | [10.1111/j.1365-2885.1985.tb00952.x](https://doi.org/10.1111/j.1365-2885.1985.tb00952.x) | [4057344](https://pubmed.ncbi.nlm.nih.gov/4057344) | Pentobarbital PK parameters (Vd, t1/2, ClB, Vc) are reported in sheep, but the abstract only summarizes them qualitatively without numeric values, which likely reside in tables/figures not provided. |
| `Luchette_2023.pdf` | Luchette M et al., Pharmacokinetic Modeling of Optimized M…, Pediatric critical care med… (2023) | popPK | 7 | [10.1097/PCC.0000000000003106](https://doi.org/10.1097/PCC.0000000000003106) | [36394369](https://pubmed.ncbi.nlm.nih.gov/36394369) | In silico one- and two-compartment PK modeling of pentobarbital dosing in humans, but the actual numeric parameter values (CL, V, rate constants) are not shown in the evidence. |

<sub>queue written 2026-10-06T20:43:17.900878+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akaike_1985 | irrelevant | 0 | 0 | In-vitro electrophysiology of chloride currents in frog neurons; no pharmacokinetic parameters for pentobarbital. |
| popPK | Dittert_1977 | irrelevant | 2 | 0 | A review of tissue residue modeling mentioning pentobarbital only as an example of modeling complexity, with no numeric PK parameters reported. |
| popPK | Fedorov_2023 | irrelevant | 0 | 0 | In-vitro mechanistic study of anesthetic effects on isolated mouse brain mitochondria; pentobarbital is only a test compound, no PK parameters reported. |
| popPK | Gronert_1989 | irrelevant | 0 | 0 | Pentobarbital is only the anesthetic agent; the PK/PD study concerns metocurine in dogs, with no pentobarbital disposition parameters. |
| popPK | Hatanaka_1988 | irrelevant | 0 | 0 | The extracted evidence contains no usable text or numeric PK parameters for pentobarbital; only a Grobid header is present. |
| popPK | Jiang_2018 | irrelevant | 0 | 0 | Pentobarbital is only used as a GABAA modulator in electrophysiology experiments; no PK parameters for pentobarbital are reported. |
| popPK | Liu_1995 | irrelevant | 0 | 0 | The study reports PK parameters for propofol, not pentobarbital, which is only mentioned as a comparator drug. |
| popPK | Luchette_2023 | relevant | 7 | 3 | In silico one- and two-compartment PK modeling of pentobarbital dosing in humans, but the actual numeric parameter values (CL, V, rate constants) are not shown in the evidence. |
| popPK | Mathers_2007 | irrelevant | 0 | 0 | Electrophysiology study of barbiturate effects on GABA(A) receptors in rat brain slices; no pharmacokinetic disposition parameters reported. |
| popPK | Raun_1998 | irrelevant | 0 | 0 | Pentobarbital is only used as an anaesthetic in rats; the paper studies ipamorelin pharmacodynamics with no PK parameters for pentobarbital. |
| popPK | Rechthand_1988 | irrelevant | 0 | 0 | Pentobarbital is only the anesthetic agent; the PK/compartmental model concerns sucrose tracer transfer across the blood-nerve barrier in rats, not pentobarbital disposition. |
| popPK | Short_1985 | relevant | 8 | 4 | Pentobarbital PK parameters (Vd, t1/2, ClB, Vc) are reported in sheep, but the abstract only summarizes them qualitatively without numeric values, which likely reside in tables/figures not provided. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Ca2+ channel blockade; pentobarbital is only a test drug with an EC50, no PK disposition parameters. |
| popPK | Valles_1995 | irrelevant | 0 | 0 | Pentobarbital is only used as an anaesthetic; PK parameters reported are for idazoxan, not pentobarbital. |
| popPK | Yamamoto_1991 | irrelevant | 0 | 0 | Pentobarbital is only used as a sleeping-time inducer in a plant-extract pharmacology study; no PK parameters reported. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | Pentobarbital is only used as a pharmacological sleep model in mice; no PK parameters for pentobarbital are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:43 UTC</sub>
