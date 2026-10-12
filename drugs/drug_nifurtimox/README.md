<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;nifurtimox&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nifurtimox_Boberg2025_reference&quot;,&quot;label&quot;:&quot;Boberg_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nifurtimox/Nifurtimox_Boberg2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nifurtimox

- **generic name:** nifurtimox
- **ATC codes:** `P01CC01`
- **DrugBank:** [DB11820](https://go.drugbank.com/drugs/DB11820) · **PubChem:** [CID 6842999](https://pubchem.ncbi.nlm.nih.gov/compound/6842999)
- **molar mass:** 287.29 g/mol (C10H13N3O5S) — DrugBank
- **groups:** approved, investigational

## About

Nifurtimox is an antiparasitic medicine used to treat trypanosomiasis, including Chagas disease. It is listed as a WHO essential medicine and remains in use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411582](https://www.wikidata.org/wiki/Q411582) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:12 | 8:15 | 1/1/0 | 1/0/0 | 0/0/0 | 432,071/25,347 | ollama / glm-5.3-flash | 9 | 3/6 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Boberg_2025_reference](drugs/drug_nifurtimox/Nifurtimox_Boberg2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Boberg M et al., Pharmacokinetics of Racemic Eflornithin…, The AAPS journal (2025) | [10.1208/s12248-025-01123-9](https://doi.org/10.1208/s12248-025-01123-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Garcia-Bournissen_2010_reference](drugs/drug_nifurtimox/Nifurtimox_GarciaBournissen2010_reference.md) | — | 1-compartment (no model) | 0 | Garcia-Bournissen F et al., Is use of nifurtimox for the treatment…, Archives of disease in chil… (2010) | [10.1136/adc.2008.157297](https://doi.org/10.1136/adc.2008.157297) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cortes_2015_MTT](drugs/drug_nifurtimox/pd_Cortes_2015_MTT.md) | T. cruzi trypomastigote viability (MTT reduction) ← nifurtimox · direct sigmoid Emax (Hill) effect | — | Cortes LA et al., Novel Gallate Triphenylphosphonium Deri…, PloS one (2015) | [10.1371/journal.pone.0136852](https://doi.org/10.1371/journal.pone.0136852) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ince_2022.pdf` | Ince I et al., Population Pharmacokinetics of Nifurtim…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2064](https://doi.org/10.1002/jcph.2064) | [35460577](https://pubmed.ncbi.nlm.nih.gov/35460577) | Population PK of nifurtimox in humans, but numeric parameter values (CL, V, etc.) are not present in the abstract; they likely reside in tables/supplementary material not provided. |
| `Garcia-Bournissen_2010.pdf` | Garcia-Bournissen F et al., Is use of nifurtimox for the treatment…, Archives of disease in chil… (2010) | popPK | 9 | [10.1136/adc.2008.157297](https://doi.org/10.1136/adc.2008.157297) | [19948512](https://pubmed.ncbi.nlm.nih.gov/19948512) | Population PK (NONMEM) of nifurtimox in humans, but only peak plasma level (1361 ng/ml) appears in the abstract; CL/V and model parameters likely in tables or supplementary material not provided. |
| `Paulos_1989.pdf` | Paulos C et al., Pharmacokinetics of a nitrofuran compou…, International journal of cl… (1989) | popPK | 8 | not captured | [2807618](https://pubmed.ncbi.nlm.nih.gov/2807618) | Human PK study of nifurtimox with one-compartment model reporting CL, V, and half-life, but the numeric values are not present in the evidence provided. |

<sub>queue written 2026-10-07T08:05:05.374041+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso-Vega_2021 | irrelevant | 3 | 0 | This is a trial design/rationale paper for the TESEO study; popPK parameters (CL, Vd) for nifurtimox are only planned, with no numeric values reported. |
| popPK | Amilon_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic time-to-event model of eflornithine efficacy; nifurtimox is only a co-administered drug in the NECT arm, with no nifurtimox PK parameters reported. |
| popPK | Ballesteros-Casallas_2023 | irrelevant | 0 | 0 | In vitro antiparasitic potency study of quinone derivatives; nifurtimox only a comparator EC50, no PK parameters. |
| popPK | Boberg_2025 | irrelevant | 0 | 0 | This is a PK model of eflornithine (L/D enantiomers); nifurtimox is only a co-administered combination partner with no nifurtimox disposition parameters reported. |
| popPK | Cortes_2015 | irrelevant | 0 | 0 | In vitro trypanocidal efficacy study of gallate TPP+ derivatives; nifurtimox is only a comparator (EC50), no PK parameters. |
| popPK | Ince_2022 | relevant | 10 | 3 | Population PK of nifurtimox in humans, but numeric parameter values (CL, V, etc.) are not present in the abstract; they likely reside in tables/supplementary material not provided. |
| popPK | Matutino_2019 | irrelevant | 0 | 0 | This is an in-vitro natural-product enzyme-inhibition study of T. cruzi sirtuins; nifurtimox is only mentioned as background, with no PK parameters. |
| popPK | Nesic_2023 | irrelevant | 0 | 0 | In vitro/in silico study of imatinib analogues against T. cruzi; nifurtimox only mentioned as existing treatment, no PK parameters. |
| popPK | Paulos_1989 | relevant | 8 | 3 | Human PK study of nifurtimox with one-compartment model reporting CL, V, and half-life, but the numeric values are not present in the evidence provided. |
| popPK | Peres_2023 | irrelevant | 0 | 0 | This is an in vitro/in silico antiparasitic study of plumbagin; nifurtimox is only mentioned as a reference treatment, with no PK parameters for it (the stray clearance line is not nifurtimox-related). |
| popPK | Silva_2023 | irrelevant | 0 | 0 | This is a natural-products isolation/antiparasitic activity study; nifurtimox is only mentioned as an existing drug, with no PK parameters reported. |
| popPK | Stass_2022 | relevant | 7 | 4 | Pediatric popPK exposure-response analysis of nifurtimox; some AUC/Cmax values (e.g., 1688–3573 µg·h/L reference range) appear, but model parameters (CL, V) live in the cited prior popPK paper/supplementary material. |
| popPK | Toro_2021 | irrelevant | 0 | 0 | In vitro antiparasitic efficacy study; nifurtimox is only a comparator, with no PK parameters reported. |
| popPK | de_2021 | irrelevant | 0 | 0 | In-vitro study of benznidazole in cardiac spheroids; nifurtimox only mentioned as an available drug, no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:05 UTC</sub>
