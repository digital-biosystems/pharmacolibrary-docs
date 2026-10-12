<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;azlocillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azlocillin_Pacifici2010_reference&quot;,&quot;label&quot;:&quot;Pacifici_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azlocillin/Azlocillin_Pacifici2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# azlocillin

- **generic name:** azlocillin
- **ATC codes:** `J01CA09`
- **DrugBank:** [DB01061](https://go.drugbank.com/drugs/DB01061) · **PubChem:** [CID 6479523](https://pubchem.ncbi.nlm.nih.gov/compound/6479523)
- **molar mass:** 461.492 g/mol (C20H23N5O6S) — DrugBank
- **groups:** approved

## About

Azlocillin is an extended-spectrum penicillin antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, though it is not widely marketed today and has largely been replaced by other penicillins.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q510154](https://www.wikidata.org/wiki/Q510154) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| azlocillin | parent | 461.492 | C20H23N5O6S | DrugBank | [6479523](https://pubchem.ncbi.nlm.nih.gov/compound/6479523) | Drugeon_1984, Krupp_1990, Lander_1989, Millart_1984, Modr_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:58 | 9:06 | 1/1/4 | 1/0/0 | 0/0/0 | 411,970/20,150 | einfracz / qwen3.8-27b | 10 | 3/7 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Pacifici_2010_reference](drugs/drug_azlocillin/Azlocillin_Pacifici2010_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Pacifici GM, Clinical Pharmacokinetics of Penicillin…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082568](https://doi.org/10.3390/ph3082568) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Krupp_1990_reference](drugs/drug_azlocillin/Azlocillin_Krupp1990_reference.md) | — | 1-compartment (no model) | 3 | Krupp A et al., [The effect of continuous arteriovenous…, Der Anaesthesist (1990) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Lander_1989_reference](drugs/drug_azlocillin/Azlocillin_Lander1989_reference.md) | — | 1-compartment (no model) | 5 | Lander RD et al., Pharmacokinetic comparison of 5 g of az…, Antimicrobial agents and ch… (1989) | [10.1128/AAC.33.5.710](https://doi.org/10.1128/AAC.33.5.710) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Millart_1984_reference](drugs/drug_azlocillin/Azlocillin_Millart1984_reference.md) | — | 1-compartment (no model) | 3 | Millart H et al., [Bone and blood levels of azlocillin af…, Presse medicale (Paris, Fra… (1984) | — |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Modr_1982_reference](drugs/drug_azlocillin/Azlocillin_Modr1982_reference.md) | held back | 1-compartment, IV | 2 | Modr Z et al., [Azlocillin--a new anti-pseudomonas pen…, Infection 10 Suppl (1982) | [10.1007/BF01640668](https://doi.org/10.1007/BF01640668) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Drugeon_1984_reference](drugs/drug_azlocillin/Azlocillin_Drugeon1984_reference.md) | — | 1-compartment (no model) | 2 | Drugeon HB et al., [Pharmacokinetics of azlocillin in the…, Presse medicale (Paris, Fra… (1984) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | [Huang_1983_Clinical_scores](drugs/drug_azlocillin/pd_Huang_1983_Clinical_scores.md) | Clinical scores · stimulation effect | — | Huang NN et al., Comparative efficacy and tolerance stud…, The Journal of antimicrobia… (1983) | [10.1093/jac/11.suppl_b.205](https://doi.org/10.1093/jac/11.suppl_b.205) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 82 matched, 72 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 1  ·  needs_review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Drugeon_1984.pdf` | Drugeon HB et al., [Pharmacokinetics of azlocillin in the…, Presse medicale (Paris, Fra… (1984) | popPK | 10 | not captured | [6231599](https://pubmed.ncbi.nlm.nih.gov/6231599) | The study reports specific pharmacokinetic parameters (half-life, renal clearance) for azlocillin in human burn patients based on a two-compartment model. |
| `Krupp_1990.pdf` | Krupp A et al., [The effect of continuous arteriovenous…, Der Anaesthesist (1990) | popPK | 10 | not captured | [2192573](https://pubmed.ncbi.nlm.nih.gov/2192573) | Reports quantitative PK parameters (half-life, volume of distribution) and compartmental modeling for azlocillin in anuric patients. |
| `Lander_1989.pdf` | Lander RD et al., Pharmacokinetic comparison of 5 g of az…, Antimicrobial agents and ch… (1989) | popPK | 10 | [10.1128/AAC.33.5.710](https://doi.org/10.1128/AAC.33.5.710) | [2751284](https://pubmed.ncbi.nlm.nih.gov/2751284) | The paper reports quantitative pharmacokinetic parameters (clearance, rate constants, concentrations) for azlocillin in humans with numeric values provided in the abstract. |
| `Millart_1984.pdf` | Millart H et al., [Bone and blood levels of azlocillin af…, Presse medicale (Paris, Fra… (1984) | popPK | 10 | not captured | [6231598](https://pubmed.ncbi.nlm.nih.gov/6231598) | The paper reports a two-compartment pharmacokinetic model for azlocillin in dogs, providing specific half-lives and compartmental rate constants in the text, though derived parameters like total clearance (CL) are not explicitly stated. |
| `Modr_1982.pdf` | Modr Z et al., [Azlocillin--a new anti-pseudomonas pen…, Infection 10 Suppl (1982) | popPK | 10 | [10.1007/BF01640668](https://doi.org/10.1007/BF01640668) | [7152688](https://pubmed.ncbi.nlm.nih.gov/7152688) | The evidence provides explicit quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for azlocillin in humans derived from a two-compartment model. |
| `Voigt_1985.pdf` | Voigt R et al., Pharmacokinetic studies of azlocillin a…, Chemotherapy (1985) | popPK | 10 | [10.1159/000238369](https://doi.org/10.1159/000238369) | [3908007](https://pubmed.ncbi.nlm.nih.gov/3908007) | The paper describes a PK study of azlocillin in humans using a two-compartment model, but the specific quantitative parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| `Voigt_1988.pdf` | Voigt R et al., [The pharmacokinetics of azlocillin aft…, Zentralblatt fur Gynakologie (1988) | popPK | 10 | not captured | [3055753](https://pubmed.ncbi.nlm.nih.gov/3055753) | The paper describes a PK study of azlocillin in humans using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided evidence snippet. |
| `Voigt_1985_2.pdf` | Voigt R et al., [Pharmacokinetic studies of azlocillin…, Zeitschrift fur Geburtshilf… (1985) | popPK | 9 | not captured | [4013451](https://pubmed.ncbi.nlm.nih.gov/4013451) | The paper describes a population PK study of azlocillin using a two-compartment model, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, likely residing in tables or figures not included. |
| `Heimann_1979.pdf` | Heimann G et al., [Pharmacokinetics of Azlocillin in prem…, Arzneimittel-Forschung (1979) | popPK | 8 | not captured | [543897](https://pubmed.ncbi.nlm.nih.gov/543897) | The abstract reports quantitative parameters including elimination half-life (2.6-2.5 h), model type (open two-compartment), and accumulation rates for azlocillin in newborns, although specific volume or clearance values are not explicitly listed. |
| `Heimann_1983.pdf` | Heimann G, Pharmacokinetics and clinical aspects o…, The Journal of antimicrobia… (1983) | popPK | 8 | [10.1093/jac/11.suppl_b.127](https://doi.org/10.1093/jac/11.suppl_b.127) | [6619022](https://pubmed.ncbi.nlm.nih.gov/6619022) | The study reports an open two-compartment model and elimination half-life for azlocillin in neonates, but specific clearance, volume, and rate constants are not provided in the text, likely residing in missing tables or figures. |

<sub>queue written 2026-10-07T10:53:48.929383+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dubey_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics of amoxicillin-clavulanic acid, not the pharmacokinetics of azlocillin. |
| popPK | Dudley_1991 | irrelevant | 1 | 0 | This is an in vitro pharmacodynamic study of drug combinations, not a population pharmacokinetic parameter estimation study for azlocillin. |
| popPK | Gómez-García_2025 | irrelevant | 0 | 0 | The paper describes the curation and in silico ADMET profiling of a natural product database (LANaPDB) and does not report any pharmacokinetic parameters for the specific drug azlocillin. |
| popPK | Heimann_1983 | relevant | 8 | 2 | The study reports an open two-compartment model and elimination half-life for azlocillin in neonates, but specific clearance, volume, and rate constants are not provided in the text, likely residing in missing tables or figures. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on the presentation of leptospirosis and does not contain any pharmacokinetic data for azlocillin. |
| popPK | Landersdorfer_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of piperacillin and flucloxacillin; azlocillin is not the subject drug nor a comparator in this paper. |
| popPK | Landersdorfer_2012 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperacillin, not azlocillin. |
| popPK | Lode_1980 | irrelevant | 2 | 0 | Azlocillin is only mentioned as a comparator in vitro; the pharmacokinetic parameters reported are exclusively for the subject drug Bay K 49999. |
| popPK | Pacifici_2010 | relevant | 4 | 4 | The paper is a review that reports specific quantitative PK parameters (Cl, Vd, t1/2) for azlocillin in neonates within the full text. |
| popPK | Varela-Rey_2024 | irrelevant | 0 | 0 | The paper is a scoping review on AI/ML in antibiotic PK, and while azlocillin is mentioned as a drug used in one of the reviewed studies, no original quantitative PK parameters for azlocillin are reported in this text. |
| popPK | Voigt_1985 | relevant | 10 | 0 | The paper describes a PK study of azlocillin in humans using a two-compartment model, but the specific quantitative parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| popPK | Voigt_1985_2 | relevant | 9 | 0 | The paper describes a population PK study of azlocillin using a two-compartment model, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, likely residing in tables or figures not included. |
| popPK | Voigt_1988 | relevant | 10 | 3 | The paper describes a PK study of azlocillin in humans using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided evidence snippet. |
| popPK | Wu_2021 | relevant | 10 | 2 | The paper describes a population PK model for azlocillin in neonates and provides median clearance (CL) values in the text, but the detailed parameter estimates (V, IIV, covariate effects) are in Table 2 which is not included in the provided evidence. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper is an editorial that mentions azlocillin only as a comparator in a proof-of-concept study cited from other literature, without reporting any original quantitative PK parameters. |
| popPK | Zhu_2014 | irrelevant | 0 | 0 | The study concerns the drug sutezolid (PNU-100480) and its metabolite, not azlocillin. |
| popPK | Zinner_1985 | irrelevant | 0 | 0 | The study uses an in-vitro kinetic model to study antibiotic combinations, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for azlocillin in a biological subject. |
| popPK | Zinner_1986 | irrelevant | 1 | 0 | The study utilizes an in vitro model to evaluate antibiotic combination efficacy against bacteria, rather than measuring pharmacokinetic disposition parameters (CL, V, etc.) in a biological host. |
| popPK | Zinner_1986_2 | irrelevant | 0 | 0 | This is an in vitro mechanistic study using a model system, not a pharmacokinetic study of azlocillin in a biological subject (human or animal) reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:53 UTC</sub>
