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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nifurtimox | parent | 287.29 | C10H13N3O5S | DrugBank | [6842999](https://pubchem.ncbi.nlm.nih.gov/compound/6842999) | Ince_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:37 | 4:37 | 1/3/0 | 0/0/0 | 0/0/0 | 307,031/19,389 | einfracz / qwen3.8-27b | 9 | 3/6 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Boberg_2025_reference](drugs/drug_nifurtimox/Nifurtimox_Boberg2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Boberg M et al., Pharmacokinetics of Racemic Eflornithin…, The AAPS journal (2025) | [10.1208/s12248-025-01123-9](https://doi.org/10.1208/s12248-025-01123-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Garcia-Bournissen_2010_reference](drugs/drug_nifurtimox/Nifurtimox_GarciaBournissen2010_reference.md) | — | 1-compartment (no model) | 0 | Garcia-Bournissen F et al., Is use of nifurtimox for the treatment…, Archives of disease in chil… (2010) | [10.1136/adc.2008.157297](https://doi.org/10.1136/adc.2008.157297) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ince_2022_reference](drugs/drug_nifurtimox/Nifurtimox_Ince2022_reference.md) | — | 1-compartment (no model) | 4 | Ince I et al., Population Pharmacokinetics of Nifurtim…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2064](https://doi.org/10.1002/jcph.2064) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Stass_2022_reference](drugs/drug_nifurtimox/Nifurtimox_Stass2022_reference.md) | — | 1-compartment (no model) | 0 | Stass H et al., Nifurtimox for Treatment of Chagas Dise…, The AAPS journal (2022) | [10.1208/s12248-022-00742-w](https://doi.org/10.1208/s12248-022-00742-w) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nifurtimox).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 17 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ince_2022.pdf` | Ince I et al., Population Pharmacokinetics of Nifurtim…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2064](https://doi.org/10.1002/jcph.2064) | [35460577](https://pubmed.ncbi.nlm.nih.gov/35460577) | The paper describes a population PK model for nifurtimox in humans and provides a relative change in clearance (50.6% higher in children) and dosing ranges, but lacks the absolute numeric parameter values (e.g., specific CL, V, t1/2) in the provided text. |
| `Paulos_1989.pdf` | Paulos C et al., Pharmacokinetics of a nitrofuran compou…, International journal of cl… (1989) | popPK | 9 | not captured | [2807618](https://pubmed.ncbi.nlm.nih.gov/2807618) | The paper describes a pharmacokinetic study of nifurtimox in humans using a one-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not provided in the text. |

<sub>queue written 2026-10-14T19:33:57.454896+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso-Vega_2021 | irrelevant | 2 | 0 | This is a clinical trial protocol/design paper for a future study (TESEO) that *plans* to evaluate population PK parameters for nifurtimox, but it does not report the actual numeric disposition values (CL, V, etc.) as the trial was still ongoing or newly completed at the time of writing. |
| popPK | Amilon_2022 | irrelevant | 0 | 0 | The study models the pharmacodynamics of eflornithine, using nifurtimox only as part of the combination therapy regimen without reporting any pharmacokinetic parameters for nifurtimox. |
| popPK | Ballesteros-Casallas_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of action and in vitro activity (EC50) of p-quinone derivatives against Trypanosoma, with nifurtimox serving only as a comparator for potency, and does not report any pharmacokinetic parameters. |
| popPK | Boberg_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eflornithine (L- and D-enantiomers), with nifurtimox serving only as a co-administered drug in efficacy simulations. |
| popPK | Cortes_2015 | irrelevant | 0 | 0 | This is an in vitro pharmacological study evaluating the trypanocidal activity of new gallate derivatives using nifurtimox as a positive control, and it does not contain any pharmacokinetic data. |
| popPK | Garcia-Bournissen_2010 | irrelevant | 2 | 1 | The study is a secondary analysis using published data to estimate infant exposure via breast milk, and no original quantitative PK parameters (CL, V, etc.) are reported in the provided evidence. |
| popPK | Matutino_2019 | irrelevant | 0 | 0 | The study focuses on the in vitro anti-parasitic and enzymatic inhibition activities of natural compounds against Trypanosoma cruzi, and nifurtimox is only mentioned in the introduction as a standard drug without any pharmacokinetic data. |
| popPK | Nesic_2023 | irrelevant | 0 | 0 | The study investigates the in vitro anti-trypanocidal activity of imatinib analogues, with nifurtimox mentioned only as a background treatment for Chagas disease and not tested or modeled. |
| popPK | Paulos_1989 | relevant | 9 | 1 | The paper describes a pharmacokinetic study of nifurtimox in humans using a one-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not provided in the text. |
| popPK | Peres_2023 | irrelevant | 0 | 0 | The paper is an in-vitro antiparasitic activity study of Plumbago auriculata and Plumbagin against Trypanosoma cruzi, with nifurtimox mentioned only as a comparator drug; no nifurtimox PK parameters are reported. |
| popPK | Silva_2023 | irrelevant | 0 | 0 | The paper is an in vitro anti-parasitic activity and phytochemical isolation study for compounds from Baccharis sphenophylla; nifurtimox is only mentioned as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Toro_2021 | irrelevant | 0 | 0 | The study is an in-vitro medicinal chemistry and pharmacological evaluation of new compounds, with nifurtimox serving only as a standard comparator for activity, not a subject for pharmacokinetic analysis. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of benznidazole's anti-parasitic activity and inflammatory effects, with no pharmacokinetic parameters reported for nifurtimox or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:34 UTC</sub>
